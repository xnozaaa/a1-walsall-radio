import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

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

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'walsallradiocars@hotmail.co.uk',
      subject: `New Booking Request - ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #F2A93B; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1A1A1A; }
            .value { color: #555; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Booking Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Service Type:</span>
                <span class="value">${serviceName}</span>
              </div>
              
              <div class="field">
                <span class="label">Customer Name:</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="field">
                <span class="label">Phone Number:</span>
                <span class="value">${phone}</span>
              </div>
              
              <div class="field">
                <span class="label">Email Address:</span>
                <span class="value">${email}</span>
              </div>
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              
              <div class="field">
                <span class="label">Pickup Location:</span>
                <span class="value">${pickup}</span>
              </div>
              
              <div class="field">
                <span class="label">Destination:</span>
                <span class="value">${destination}</span>
              </div>
              
              <div class="field">
                <span class="label">Date:</span>
                <span class="value">${date}</span>
              </div>
              
              <div class="field">
                <span class="label">Time:</span>
                <span class="value">${time}</span>
              </div>
              
              <div class="field">
                <span class="label">Number of Passengers:</span>
                <span class="value">${passengers}</span>
              </div>
              
              ${requirements ? `
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              <div class="field">
                <span class="label">Special Requirements:</span>
                <div class="value" style="margin-top: 5px;">${requirements}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>A1 Walsall Radio Taxis Ltd<br>
              165 Stafford St, Walsall WS2 8EA<br>
              Phone: 01922 644577</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Booking Request - ${serviceName}

Service Type: ${serviceName}
Customer Name: ${name}
Phone Number: ${phone}
Email Address: ${email}

Journey Details:
Pickup Location: ${pickup}
Destination: ${destination}
Date: ${date}
Time: ${time}
Number of Passengers: ${passengers}

${requirements ? `Special Requirements:\n${requirements}` : ''}

---
A1 Walsall Radio Taxis Ltd
165 Stafford St, Walsall WS2 8EA
Phone: 01922 644577
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
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
