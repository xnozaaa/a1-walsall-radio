"use client"

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, AlertCircle } from 'lucide-react';

interface BookingFormDialogProps {
  children: React.ReactNode;
  defaultService?: string;
}

export function BookingFormDialog({ children, defaultService }: BookingFormDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      pickup: formData.get('pickup'),
      destination: formData.get('destination'),
      date: formData.get('date'),
      time: formData.get('time'),
      passengers: formData.get('passengers'),
      requirements: formData.get('requirements'),
    };

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send booking request');
      }

      setSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
      }, 3000);
    } catch (err) {
      setError('Failed to send booking request. Please try again or call us at 01922 644577.');
      console.error('Booking submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="text-foreground">BOOK YOUR </span>
            <span className="text-primary">JOURNEY</span>
          </DialogTitle>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Booking Request Received!</h3>
            <p className="text-muted-foreground">
              We'll contact you shortly to confirm your booking details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="John Smith" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="01922 644577" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Type *</Label>
              <Select name="service" defaultValue={defaultService}>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school-transport">Home-to-School Transport</SelectItem>
                  <SelectItem value="school-contracts">School Transport Contracts</SelectItem>
                  <SelectItem value="corporate">Corporate Travel</SelectItem>
                  <SelectItem value="booking-tablets">On-Site Booking Tablets</SelectItem>
                  <SelectItem value="wheelchair">Wheelchair-Accessible Transport</SelectItem>
                  <SelectItem value="airport">Airport Transfers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location *</Label>
                <Input id="pickup" name="pickup" placeholder="165 Stafford St, Walsall" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destination">Destination *</Label>
                <Input id="destination" name="destination" placeholder="Birmingham Airport" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input id="date" name="date" type="date" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Time *</Label>
                <Input id="time" name="time" type="time" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="passengers">Number of Passengers *</Label>
              <Select name="passengers" defaultValue="1">
                <SelectTrigger id="passengers" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Passenger</SelectItem>
                  <SelectItem value="2">2 Passengers</SelectItem>
                  <SelectItem value="3">3 Passengers</SelectItem>
                  <SelectItem value="4">4 Passengers</SelectItem>
                  <SelectItem value="5">5 Passengers</SelectItem>
                  <SelectItem value="6">6 Passengers</SelectItem>
                  <SelectItem value="7">7 Passengers</SelectItem>
                  <SelectItem value="8">8 Passengers</SelectItem>
                  <SelectItem value="8+">8+ Passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Special Requirements</Label>
              <Textarea 
                id="requirements" 
                name="requirements" 
                placeholder="Please let us know about wheelchair access needs, child seats, luggage, or any other special requirements..."
                className="min-h-24"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button 
                type="submit" 
                className="flex-1 bg-primary hover:bg-[#D68A1F] text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Calendar className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Calendar className="mr-2 h-4 w-4" />
                    Submit Booking Request
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to be contacted by A1 Walsall Radio Taxis regarding your booking.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}