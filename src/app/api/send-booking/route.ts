import { NextRequest, NextResponse } from 'next/server';
import React from 'react';
import { getEmailConfig, getResend } from '@/lib/resend';
import { BookingConfirmationEmail } from '@/components/emails/BookingConfirmationEmail';

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = text(body.name);
    const phone = text(body.phone);
    const email = text(body.email);
    const service = text(body.service);
    const pickup = text(body.pickup);
    const destination = text(body.destination);
    const date = text(body.date);
    const time = text(body.time);
    const passengers = text(body.passengers);
    const requirements = text(body.requirements);

    if (
      !name ||
      !phone ||
      !email ||
      !service ||
      !pickup ||
      !destination ||
      !date ||
      !time ||
      !passengers
    ) {
      return NextResponse.json(
        { error: 'Please complete all required booking fields.' },
        { status: 400 }
      );
    }

    // Format service name for display
    const serviceNames: Record<string, string> = {
      'school-transport': 'Home-to-School Transport',
      'school-contracts': 'School Transport Contracts',
      'corporate': 'Corporate Travel',
      'booking-tablets': 'On-Site Booking Tablets',
      'wheelchair': 'Wheelchair-Accessible Transport',
      'airport': 'Airport Transfers',
    };

    const serviceName = serviceNames[service] || service;

    const resend = getResend();
    const emailConfig = getEmailConfig();
    const { data, error } = await resend.emails.send({
      from: `${emailConfig.fromName} <${emailConfig.fromEmail}>`,
      to: emailConfig.bookingTo,
      replyTo: email,
      subject: `New Booking Request - ${serviceName}`,
      react: React.createElement(BookingConfirmationEmail, {
        name,
        phone,
        email,
        service,
        serviceName,
        pickup,
        destination,
        date,
        time,
        passengers,
        requirements,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send booking request' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Booking request sent successfully',
        messageId: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const isConfigurationError =
      error instanceof Error && error.message.includes('not configured');

    return NextResponse.json(
      {
        error: isConfigurationError
          ? 'Booking email is temporarily unavailable. Please call 01922 644577.'
          : 'Failed to send booking request',
      },
      { status: isConfigurationError ? 503 : 500 }
    );
  }
}
