import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { BookingConfirmationEmail } from '@/components/emails/BookingConfirmationEmail';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      service,
      pickup,
      destination,
      date,
      time,
      passengers,
      requirements
    } = body;

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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME || 'A1 Walsall Radio Taxis'} <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: 'walsallradiocars@hotmail.co.uk',
      subject: `New Booking Request - ${serviceName}`,
      react: BookingConfirmationEmail({
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
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}