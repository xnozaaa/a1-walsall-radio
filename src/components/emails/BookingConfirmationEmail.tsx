import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface BookingConfirmationEmailProps {
  name: string;
  phone: string;
  email: string;
  service: string;
  serviceName: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  requirements?: string;
}

export const BookingConfirmationEmail: React.FC<BookingConfirmationEmailProps> = ({
  name,
  phone,
  email,
  serviceName,
  pickup,
  destination,
  date,
  time,
  passengers,
  requirements,
}) => (
  <Html>
    <Head />
    <Preview>New Booking Request - {serviceName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={headerText}>New Booking Request</Text>
        </Section>
        
        <Section style={content}>
          <Section style={field}>
            <Text style={label}>Service Type:</Text>
            <Text style={value}>{serviceName}</Text>
          </Section>
          
          <Section style={field}>
            <Text style={label}>Customer Name:</Text>
            <Text style={value}>{name}</Text>
          </Section>
          
          <Section style={field}>
            <Text style={label}>Phone Number:</Text>
            <Text style={value}>{phone}</Text>
          </Section>
          
          <Section style={field}>
            <Text style={label}>Email Address:</Text>
            <Text style={value}>{email}</Text>
          </Section>
          
          <Hr style={hr} />
          
          <Section style={field}>
            <Text style={label}>Pickup Location:</Text>
            <Text style={value}>{pickup}</Text>
          </Section>
          
          <Section style={field}>
            <Text style={label}>Destination:</Text>
            <Text style={value}>{destination}</Text>
          </Section>
          
          <Section style={field}>
            <Text style={label}>Date:</Text>
            <Text style={value}>{date}</Text>
          </Section>
          
          <Section style={field}>
            <Text style={label}>Time:</Text>
            <Text style={value}>{time}</Text>
          </Section>
          
          <Section style={field}>
            <Text style={label}>Number of Passengers:</Text>
            <Text style={value}>{passengers}</Text>
          </Section>
          
          {requirements && (
            <>
              <Hr style={hr} />
              <Section style={field}>
                <Text style={label}>Special Requirements:</Text>
                <Text style={value}>{requirements}</Text>
              </Section>
            </>
          )}
        </Section>
        
        <Section style={footer}>
          <Text style={footerText}>
            A1 Walsall Radio Taxis Ltd<br />
            165 Stafford St, Walsall WS2 8EA<br />
            Phone: 01922 644577
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f4f4f4',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#F2A93B',
  padding: '20px',
  textAlign: 'center' as const,
};

const headerText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const content = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  border: '1px solid #dddddd',
};

const field = {
  marginBottom: '15px',
};

const label = {
  fontWeight: 'bold',
  color: '#1A1A1A',
  margin: '0 0 5px 0',
  fontSize: '14px',
};

const value = {
  color: '#555555',
  margin: '0',
  fontSize: '14px',
  lineHeight: '1.6',
};

const hr = {
  borderColor: '#dddddd',
  margin: '20px 0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '20px',
};

const footerText = {
  color: '#888888',
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '0',
};
