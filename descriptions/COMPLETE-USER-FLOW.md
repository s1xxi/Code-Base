# Complete User Flow - How It Works

## 📝 Step-by-Step User Journey

### **STEP 1: Sign Up**
1. User goes to landing page
2. Clicks "Get Started" or "Sign Up" → Goes to `/auth/register`
3. Fills out form:
   - Name
   - Email
   - Password (min 6 characters)
4. Clicks "Sign Up"
5. **Backend creates account:**
   - Password is hashed with bcrypt
   - Account saved to MongoDB
   - Email verification token generated
   - **Welcome email sent**
   - **Verification email sent**
6. User redirected to "Check Your Email" page
7. **Email verification is optional** - user can log in without verifying

---

### **STEP 2: Email Verification (Optional)**
1. User receives email with verification link
2. Clicks link → Goes to `/auth/verify-email?token=...`
3. Backend verifies token
4. Sets `emailVerified = true` in database
5. Redirects to login page

---

### **STEP 3: Login**
1. User goes to `/auth/login`
2. Enters email/password OR clicks "Continue with Google"
3. **NextAuth authenticates:**
   - Validates credentials
   - Creates JWT session
4. User redirected to `/dashboard`

---

### **STEP 4: Dashboard (Before Payment)**
1. User arrives at `/dashboard`
2. **Dashboard checks `user.hasAccess`:**
   - If `hasAccess = false` → Shows **PAYWALL**
   - If `hasAccess = true` → Shows **FULL DASHBOARD**

**Paywall Shows:**
- Lock icon 🔒
- "Get Lifetime Access" message
- Price: $49 (hardcoded)
- "Get Started" button → Creates Stripe checkout

---

### **STEP 5: Payment Flow**

#### **Option A: From Pricing Page**
1. User clicks "Get Started" on pricing card
2. Goes to `/checkout?plan=Pro&period=monthly&price=19.99`
3. **Checkout page:**
   - Requires login (redirects to login if not authenticated)
   - Shows plan summary
   - Shows price
   - "Pay $X.XX" button

#### **Option B: From Dashboard Paywall**
1. User clicks "Get Lifetime Access" button
2. ButtonAccount component creates checkout session
3. Redirects to Stripe checkout

#### **Payment Process:**
1. User clicks "Pay" button
2. Frontend calls `/api/stripe/create-checkout`
3. **Backend:**
   - Gets logged-in user
   - Creates/gets Stripe customer
   - Maps plan name to Stripe Price ID
   - Creates Stripe Checkout Session
   - Returns checkout URL
4. User redirected to **Stripe's secure checkout page**
5. User enters payment details on Stripe
6. User completes payment on Stripe
7. Stripe redirects back to: `/dashboard?success=true`

---

### **STEP 6: Payment Processing (Automatic)**

**Two things happen simultaneously:**

#### **A. Stripe Webhook (Background)**
1. Stripe sends webhook to `/api/stripe/webhook`
2. Webhook handler:
   - Verifies webhook signature
   - Processes `checkout.session.completed` event
   - Finds user by `userId` in metadata
   - **Sets `user.hasAccess = true`**
   - Saves Stripe `customerId`
   - **Sends payment receipt email**
3. User now has access ✅

#### **B. User Sees Dashboard**
1. User lands on `/dashboard?success=true`
2. Dashboard checks `user.hasAccess`
3. **If webhook completed:** Shows full dashboard + success message
4. **If webhook still processing:** Might briefly see paywall, then updates

---

### **STEP 7: Full Dashboard Access**
Once `hasAccess = true`, user sees:
- Welcome message
- Access status: "Active"
- Full dashboard features
- Stats and metrics
- Quick start guide

---

## ✅ What Works

- ✅ Sign up → Account created
- ✅ Login → Access dashboard
- ✅ Payment → Stripe checkout → Webhook grants access
- ✅ Dashboard → Unlocks after payment
- ✅ Billing → Can view invoices
- ✅ Settings → Can manage account

## 🔄 Complete Flow Diagram

```
Landing Page
    ↓
Sign Up (/auth/register)
    ↓
Account Created + Emails Sent
    ↓
Login (/auth/login)
    ↓
Dashboard (/dashboard)
    ↓
Sees Paywall (hasAccess = false)
    ↓
Clicks "Get Started" → Checkout (/checkout)
    ↓
Clicks "Pay" → Stripe Checkout
    ↓
Completes Payment on Stripe
    ↓
Redirects to /dashboard?success=true
    ↓
[WEBHOOK RUNS IN BACKGROUND]
    ↓
Sets hasAccess = true
    ↓
Dashboard Shows Full Content ✅
```

---

## 💡 Current Behavior

**After Sign Up:**
- Can log in immediately (email verification optional)
- Goes to dashboard
- Sees paywall (no access yet)

**After Payment:**
- Webhook automatically grants access
- Dashboard unlocks
- Payment receipt email sent

**Access Control:**
- Dashboard checks `user.hasAccess`
- `hasAccess = false` → Paywall
- `hasAccess = true` → Full dashboard

---

## 🎯 Summary

**YES, you can:**
1. ✅ Sign up
2. ✅ Log in
3. ✅ Go to dashboard (sees paywall)
4. ✅ Pay for access
5. ✅ Automatically get access
6. ✅ See full dashboard
7. ✅ Manage billing
8. ✅ View invoices
9. ✅ Update settings

**The system is fully functional!** 🚀

