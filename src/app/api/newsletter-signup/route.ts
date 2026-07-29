import { NextRequest, NextResponse } from 'next/server';
import { getEmailConfig, getResend } from '@/lib/resend';

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const firstName = text(body.firstName);
    const email = text(body.email);

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'Please enter your first name and email address.' },
        { status: 400 }
      );
    }

    const resend = getResend();
    const emailConfig = getEmailConfig();
    const { data, error } = await resend.emails.send({
      from: `${emailConfig.fromName} <${emailConfig.fromEmail}>`,
      to: emailConfig.newsletterTo,
      replyTo: email,
      subject: `Newsletter signup from ${firstName}`,
      html: `
        <h2>New newsletter signup</h2>
        <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p>This person requested news and offers through the A1 Walsall Radio Taxis website.</p>
      `,
    });

    if (error) {
      console.error('Newsletter Resend error:', error);
      return NextResponse.json(
        { error: 'Unable to register your email right now.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Unable to register your email right now.' },
      { status: 500 }
    );
  }
}
