# Booking System API Integration Guide

## Overview
The booking page (`src/pages/Booking.tsx`) is ready for Google Calendar API integration. This guide explains how to connect it with Google Calendar or alternative booking APIs.

## Current Implementation

### Features
- ✅ Multi-step booking flow (Service → Date/Time → Contact Info)
- ✅ Calendar date picker with disabled past dates
- ✅ Time slot selection grid
- ✅ Form validation
- ✅ Service selection with pricing
- ✅ Contact information collection
- ✅ Booking summary display
- ✅ Toast notifications

### Simulated Features (Ready for API Integration)
1. **Available Time Slots**: Currently using static array - needs API call
2. **Booking Confirmation**: Currently logs to console - needs API call
3. **Calendar Availability**: Currently simulated - needs real-time data

## Google Calendar API Integration

### Step 1: Enable Google Calendar API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Calendar API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

### Step 2: Create OAuth Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Configure consent screen if prompted
4. Application type: Web application
5. Add authorized redirect URIs:
   - `http://localhost:8080` (development)
   - `https://yourdomain.com` (production)
6. Save your **Client ID** and **Client Secret**

### Step 3: Install Google API Client

```bash
npm install @googleapis/calendar gapi-script
```

### Step 4: Create API Service File

Create `src/services/calendarApi.ts`:

```typescript
import { google } from 'googleapis';

const calendar = google.calendar('v3');

// Your OAuth2 credentials
const oauth2Client = new google.auth.OAuth2(
  process.env.VITE_GOOGLE_CLIENT_ID,
  process.env.VITE_GOOGLE_CLIENT_SECRET,
  process.env.VITE_GOOGLE_REDIRECT_URI
);

export const getAvailableSlots = async (date: Date) => {
  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(9, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(19, 0, 0, 0);

    const response = await calendar.events.list({
      auth: oauth2Client,
      calendarId: 'primary',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const bookedSlots = response.data.items?.map(event => ({
      start: new Date(event.start?.dateTime || ''),
      end: new Date(event.end?.dateTime || ''),
    })) || [];

    // Generate available slots
    const allSlots = generateTimeSlots(startOfDay, endOfDay, 30); // 30-min intervals
    return allSlots.filter(slot => !isSlotBooked(slot, bookedSlots));
  } catch (error) {
    console.error('Error fetching available slots:', error);
    throw error;
  }
};

export const createBooking = async (bookingData: {
  service: string;
  date: Date;
  time: string;
  duration: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
}) => {
  const [hours, minutes] = bookingData.time.match(/(\d+):(\d+)/)!.slice(1);
  const startTime = new Date(bookingData.date);
  startTime.setHours(
    parseInt(hours) + (bookingData.time.includes('PM') && parseInt(hours) !== 12 ? 12 : 0),
    parseInt(minutes)
  );

  const endTime = new Date(startTime);
  endTime.setMinutes(endTime.getMinutes() + bookingData.duration);

  try {
    const event = await calendar.events.insert({
      auth: oauth2Client,
      calendarId: 'primary',
      requestBody: {
        summary: `${bookingData.service} - ${bookingData.customerName}`,
        description: `
Service: ${bookingData.service}
Customer: ${bookingData.customerName}
Email: ${bookingData.customerEmail}
Phone: ${bookingData.customerPhone}
Notes: ${bookingData.notes || 'None'}
        `.trim(),
        start: {
          dateTime: startTime.toISOString(),
          timeZone: 'America/New_York',
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: 'America/New_York',
        },
        attendees: [
          { email: bookingData.customerEmail },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 }, // 1 day before
            { method: 'popup', minutes: 60 }, // 1 hour before
          ],
        },
      },
    });

    return event.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

// Helper functions
function generateTimeSlots(start: Date, end: Date, intervalMinutes: number) {
  const slots: string[] = [];
  const current = new Date(start);

  while (current < end) {
    const hours = current.getHours();
    const minutes = current.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    slots.push(`${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`);
    current.setMinutes(current.getMinutes() + intervalMinutes);
  }

  return slots;
}

function isSlotBooked(slot: string, bookedSlots: { start: Date; end: Date }[]) {
  // Parse slot time and check if it overlaps with any booked slots
  // Implementation depends on your specific needs
  return false;
}
```

### Step 5: Update Booking Component

Update `src/pages/Booking.tsx`:

```typescript
// Add at top
import { getAvailableSlots, createBooking } from '@/services/calendarApi';

// Replace handleDateSelect function
const handleDateSelect = async (date: Date | undefined) => {
  setSelectedDate(date);
  setSelectedTime("");
  
  if (date) {
    try {
      const slots = await getAvailableSlots(date);
      setAvailableSlots(slots);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load available slots. Please try again.",
        variant: "destructive",
      });
    }
  }
};

// Replace handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!selectedDate || !selectedTime || !selectedService) {
    toast({
      title: "Missing Information",
      description: "Please complete all required fields.",
      variant: "destructive",
    });
    return;
  }

  try {
    await createBooking({
      service: selectedServiceData!.name,
      date: selectedDate,
      time: selectedTime,
      duration: selectedServiceData!.duration,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      notes: formData.notes,
    });

    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your appointment is scheduled for ${format(selectedDate, "PPP")} at ${selectedTime}.`,
    });

    setTimeout(() => {
      navigate("/");
    }, 3000);
  } catch (error) {
    toast({
      title: "Booking Failed",
      description: "Unable to create booking. Please try again or call us.",
      variant: "destructive",
    });
  }
};
```

### Step 6: Environment Variables

Create `.env` file in project root:

```env
VITE_GOOGLE_CLIENT_ID=your-client-id-here
VITE_GOOGLE_CLIENT_SECRET=your-client-secret-here
VITE_GOOGLE_REDIRECT_URI=http://localhost:8080
```

⚠️ **Important**: Add `.env` to `.gitignore` to keep credentials secure!

## Alternative: Calendly Integration

If you prefer a simpler solution, integrate Calendly:

### Option 1: Embed Calendly Widget

```typescript
// In Booking.tsx, replace the calendar section with:
<div className="calendly-inline-widget" 
     data-url="https://calendly.com/your-username/appointment"
     style={{ minWidth: '320px', height: '700px' }} />

// Add to index.html:
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Option 2: Use Calendly PopUp

```bash
npm install react-calendly
```

```typescript
import { PopupModal } from "react-calendly";

const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

<PopupModal
  url="https://calendly.com/your-username/appointment"
  onModalClose={() => setIsCalendlyOpen(false)}
  open={isCalendlyOpen}
  rootElement={document.getElementById("root")!}
/>
```

## Alternative: Acuity Scheduling

Acuity (by Squarespace) offers similar functionality:

```typescript
// Embed Acuity scheduler
<iframe 
  src="https://app.acuityscheduling.com/schedule.php?owner=12345678" 
  width="100%" 
  height="800" 
  frameBorder="0"
/>
```

## Testing

### Test Mode
The current implementation works in "demo mode" with simulated data. You can:
1. Select any future date
2. Choose from available time slots
3. Fill out the form
4. See confirmation message

### API Testing Checklist
- [ ] OAuth flow completes successfully
- [ ] Available slots load correctly
- [ ] Booking creates calendar event
- [ ] Confirmation email sent to customer
- [ ] Reminder notifications work
- [ ] Double-booking prevention works
- [ ] Error handling displays user-friendly messages

## Production Considerations

### Security
1. **Never expose API keys in frontend code**
2. Use backend proxy for API calls
3. Implement rate limiting
4. Validate all user inputs
5. Use HTTPS in production

### Backend Setup (Recommended)

Create a backend API endpoint:

```typescript
// backend/api/bookings.ts
import express from 'express';
import { google } from 'googleapis';

const router = express.Router();

router.post('/create', async (req, res) => {
  // Validate request
  // Create calendar event
  // Send confirmation email
  // Return success/error
});

router.get('/available-slots/:date', async (req, res) => {
  // Get bookings for date
  // Calculate available slots
  // Return slots
});

export default router;
```

### Email Notifications

Install nodemailer for custom emails:

```bash
npm install nodemailer
```

```typescript
import nodemailer from 'nodemailer';

const sendConfirmationEmail = async (booking: BookingData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: 'noreply@psbarbershop.com',
    to: booking.customerEmail,
    subject: 'Booking Confirmation - P\'s Barber Shop',
    html: `
      <h1>Appointment Confirmed!</h1>
      <p>Thank you for booking with us, ${booking.customerName}!</p>
      <p><strong>Service:</strong> ${booking.service}</p>
      <p><strong>Date:</strong> ${booking.date}</p>
      <p><strong>Time:</strong> ${booking.time}</p>
      <p>We look forward to seeing you!</p>
    `,
  });
};
```

## Support

For issues or questions:
- Google Calendar API: https://developers.google.com/calendar
- Calendly API: https://developer.calendly.com
- Acuity API: https://developers.acuityscheduling.com

## Next Steps

1. ✅ Booking page created
2. ✅ Form validation implemented
3. ✅ UI/UX complete
4. ⏳ Choose API provider (Google/Calendly/Acuity)
5. ⏳ Implement API integration
6. ⏳ Set up backend proxy (recommended)
7. ⏳ Configure email notifications
8. ⏳ Test thoroughly
9. ⏳ Deploy to production
