import { Resend } from 'resend';

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  return new Resend(apiKey);
}

export function getEmailConfig() {
  return {
    fromName: process.env.RESEND_FROM_NAME?.trim() || 'A1 Walsall Radio Taxis',
    fromEmail:
      process.env.RESEND_FROM_EMAIL?.trim() ||
      'forms@send.shongoshomithi.co.uk',
    bookingTo:
      process.env.BOOKING_TO_EMAIL?.trim() ||
      'walsallradiocars@hotmail.co.uk',
    newsletterTo:
      process.env.NEWSLETTER_TO_EMAIL?.trim() ||
      process.env.BOOKING_TO_EMAIL?.trim() ||
      'walsallradiocars@hotmail.co.uk',
  };
}
