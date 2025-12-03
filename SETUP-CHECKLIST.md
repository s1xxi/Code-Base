# ✅ Setup Checklist - Print This & Check Off As You Go

## Accounts to Create (All FREE)

- [ ] **MongoDB Atlas** - https://www.mongodb.com/cloud/atlas/register
- [ ] **Stripe** - https://dashboard.stripe.com/register
- [ ] **Resend** - https://resend.com/signup
- [ ] **GitHub** - https://github.com/signup
- [ ] **Vercel** - https://vercel.com/signup (uses GitHub)

---

## Step 1: MongoDB Atlas

- [ ] Created account
- [ ] Created FREE cluster
- [ ] Created database user (username + password)
- [ ] Allowed network access (Allow from anywhere)
- [ ] Got connection string
- [ ] Replaced `<password>` in connection string
- [ ] **SAVED:** MongoDB connection string

**Connection string looks like:**
```
mongodb+srv://admin:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

## Step 2: Stripe

- [ ] Created account
- [ ] Completed business setup
- [ ] **Added bank account** (to receive money!)
- [ ] Switched to **LIVE mode** (not test mode)
- [ ] Got **LIVE** publishable key (`pk_live_...`)
- [ ] Got **LIVE** secret key (`sk_live_...`)
- [ ] Created product(s) in Stripe
- [ ] Got Price ID(s) (`price_...`)
- [ ] **SAVED:** Stripe publishable key
- [ ] **SAVED:** Stripe secret key
- [ ] **SAVED:** Price ID(s)

---

## Step 3: Resend

- [ ] Created account
- [ ] Created API key
- [ ] **SAVED:** API key (`re_...`)

---

## Step 4: Code Setup

- [ ] Generated NextAuth secret: `openssl rand -base64 32`
- [ ] Created `.env.local` file
- [ ] Filled in all environment variables:
  - [ ] MONGODB_URI
  - [ ] NEXTAUTH_SECRET
  - [ ] NEXTAUTH_URL (localhost for now)
  - [ ] Stripe keys (LIVE)
  - [ ] Stripe Price IDs
  - [ ] RESEND_API_KEY
- [ ] Ran `npm install`
- [ ] Tested locally: `npm run dev`

---

## Step 5: GitHub & Deployment

- [ ] Created GitHub account
- [ ] Created repository
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel
- [ ] Added ALL environment variables to Vercel
- [ ] Updated `NEXTAUTH_URL` to production URL in Vercel
- [ ] Got production URL: `https://your-project.vercel.app`

---

## Step 6: Stripe Webhook

- [ ] Created webhook endpoint in Stripe
- [ ] URL: `https://your-project.vercel.app/api/stripe/webhook`
- [ ] Selected events:
  - [ ] checkout.session.completed
  - [ ] customer.subscription.created
  - [ ] customer.subscription.updated
  - [ ] customer.subscription.deleted
  - [ ] invoice.payment_succeeded
  - [ ] invoice.payment_failed
- [ ] Got webhook signing secret (`whsec_...`)
- [ ] Added `STRIPE_WEBHOOK_SECRET` to Vercel
- [ ] Redeployed Vercel

---

## Step 7: Testing

- [ ] Tested registration on live site
- [ ] Tested login
- [ ] Tested payment (real card, small amount)
- [ ] Verified payment appears in Stripe Dashboard
- [ ] Verified user gets access after payment
- [ ] Verified email is sent
- [ ] Verified webhook event in Stripe
- [ ] Verified database updated (`hasAccess: true`)

---

## ✅ Final Verification

- [ ] Money appears in Stripe account
- [ ] Money transfers to bank account (after Stripe processing)
- [ ] Emails are sending
- [ ] Users get access after payment
- [ ] Everything works!

---

## 🎯 What You Need to Save

Write these down somewhere safe:

1. **MongoDB Connection String:**
   ```
   mongodb+srv://...
   ```

2. **Stripe Keys:**
   - Publishable: `pk_live_...`
   - Secret: `sk_live_...`

3. **Stripe Price IDs:**
   - Lifetime: `price_...`
   - (Others if using subscriptions)

4. **Resend API Key:**
   - `re_...`

5. **NextAuth Secret:**
   - (from openssl command)

6. **Webhook Secret:**
   - `whsec_...`

7. **Production URL:**
   - `https://your-project.vercel.app`

---

## 🚀 You're Ready!

Once all boxes are checked, your app is fully functional and ready to accept real payments!





