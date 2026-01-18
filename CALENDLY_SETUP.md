# Calendly Integration - Complete Setup Guide

## ✅ What's Been Done

1. **Booking page updated** to use Calendly widget ([src/pages/Booking.tsx](src/pages/Booking.tsx))
2. **Calendly script** automatically loads when page opens
3. **Services display** shows all offerings with pricing
4. **Clean UI** with back navigation and feature highlights

## 🚀 Quick Start

### Step 1: Create Calendly Account
1. Go to [calendly.com](https://calendly.com) and sign up
2. Complete your profile setup

### Step 2: Create Event Type
1. Click **"+ New Event Type"** → Choose **"One-on-One"**
2. Set name: `Barber Appointment`
3. Set duration: Start with 30 minutes (can create more later)
4. Set location: `4523 Centre Ave, Pittsburgh, PA`

### Step 3: Set Availability
- **Monday - Saturday**: 9:00 AM - 7:00 PM
- **Sunday**: Closed

### Step 4: Get Your URL
Copy your Calendly link (e.g., `https://calendly.com/ps-barber/appointment`)

### Step 5: Update Code
Edit [`src/pages/Booking.tsx`](src/pages/Booking.tsx) line 8:
```typescript
const CALENDLY_URL = "https://calendly.com/YOUR-USERNAME/appointment";
```

### Step 6: Test
Visit http://localhost:8080/book and book a test appointment!

## 📋 Detailed Configuration

### Multiple Services
Create separate event types for each service:
- Classic Haircut (30 min) - $35
- Fade & Taper (45 min) - $40
- Beard Trim (20 min) - $25
- Hot Towel Shave (40 min) - $45
- Hair & Beard Combo (60 min) - $55
- Kids Cut (25 min) - $25

### Branding (Optional)
In Calendly **Account** → **Branding**:
- **Primary Color**: `#D4A574` (gold)
- Upload your logo

### Email Notifications
In **Workflows**, enable:
- ✅ Confirmation email to customer
- ✅ Reminder 24 hours before
- ✅ Reminder 1 hour before

### Calendar Sync
Connect Google Calendar or Outlook to prevent double-bookings:
1. Go to **Calendar Connection**
2. Connect your calendar
3. Done!

## 🎨 Advanced Customization

### Custom Widget Colors
```typescript
const CALENDLY_URL = "https://calendly.com/your-username/appointment?hide_gdpr_banner=1&primary_color=D4A574";
```

### Pre-fill Customer Data
```typescript
const CALENDLY_URL = `https://calendly.com/your-username/appointment?name=${customerName}&email=${customerEmail}`;
```

## 💰 Pricing Plans

**Free Plan** (Perfect to start):
- Unlimited bookings
- Basic customization
- Email notifications
- 1 calendar sync

**Pro Plan** ($12/month):
- Remove Calendly branding
- SMS notifications
- Payment collection
- Unlimited calendar connections

**Teams Plan** ($16/user/month):
- Multiple barbers
- Round-robin scheduling
- Team page

## 📱 Mobile Ready

The Calendly widget is fully responsive and works perfectly on mobile devices!

## ✅ Launch Checklist

Before going live:
- [ ] Calendly account created
- [ ] Event types configured
- [ ] Availability set
- [ ] Email notifications enabled
- [ ] Calendly URL updated in code
- [ ] Test booking completed
- [ ] Confirmation email received
- [ ] Tested on mobile

## 🆘 Need Help?

- Calendly Help Center: https://help.calendly.com
- Support: support@calendly.com

## 🎉 You're Ready!

Your booking system is fully integrated and ready to accept appointments. Just set up your Calendly account and update the URL!
