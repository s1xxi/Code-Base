# ✅ Quick Setup Checklist

Follow these steps in order to make your app fully functional:

## 1. Database Setup (5 min)
- [ ] Create MongoDB Atlas account (free)
- [ ] Create cluster
- [ ] Create database user
- [ ] Whitelist IP (or allow all)
- [ ] Copy connection string

## 2. Stripe Setup (10 min)
- [ ] Create Stripe account
- [ ] Add bank account (to receive money!)
- [ ] Get LIVE API keys (pk_live_... and sk_live_...)
- [ ] Create product(s) in Stripe
- [ ] Copy Price ID(s)
- [ ] Set up webhook endpoint (after deployment)

## 3. Email Setup (5 min)
- [ ] Create Resend account (free)
- [ ] Get API key (re_...)
- [ ] (Optional) Verify domain

## 4. Environment Variables (5 min)
- [ ] Create `.env.local` file
- [ ] Add MongoDB connection string
- [ ] Generate NEXTAUTH_SECRET: `openssl rand -base64 32`
- [ ] Add Stripe LIVE keys
- [ ] Add Stripe Price IDs
- [ ] Add Resend API key

## 5. Test Locally (5 min)
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test registration/login
- [ ] Test checkout with test card: `4242 4242 4242 4242`
- [ ] Verify webhook updates access
- [ ] Check email is sent

## 6. Deploy to Production (10 min)
- [ ] Push code to GitHub
- [ ] Deploy to Vercel
- [ ] Add ALL environment variables to Vercel
- [ ] Update `NEXTAUTH_URL` to production URL
- [ ] Set up Stripe webhook for production URL
- [ ] Update webhook secret in Vercel

## 7. Verify Everything (5 min)
- [ ] Test real payment (small amount)
- [ ] Check money appears in Stripe
- [ ] Check user gets access
- [ ] Check email is received
- [ ] Test access control (paywall works)

---

## 🎯 Total Time: ~45 minutes

## 💰 Money Flow
**Customer pays** → **Stripe** → **Your Stripe account** → **Your bank account**

## 📧 Email Flow
**Payment completes** → **Webhook triggers** → **Email sent via Resend** → **Customer inbox**

## 🔐 Access Flow
**Payment completes** → **Webhook updates database** → **hasAccess: true** → **User sees dashboard**

---

**Need detailed instructions?** See `SETUP-COMPLETE-GUIDE.md`





