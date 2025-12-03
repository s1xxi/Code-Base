# 🚀 Complete Setup Guide - Make It Fully Functional

This guide will walk you through setting up everything needed to:
- ✅ Accept real payments via Stripe (money goes to your account)
- ✅ Send email updates to customers
- ✅ Grant access after payment
- ✅ Fully functional product

---

## 📋 Prerequisites Checklist

- [ ] Node.js installed
- [ ] Code editor (VS Code recommended)
- [ ] GitHub account (for deployment)
- [ ] Domain name (optional, but recommended)

---

## Step 1: Set Up MongoDB Database

### Option A: MongoDB Atlas (Free - Recommended)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (choose FREE tier)
4. Create a database user:
   - Go to **Database Access** → **Add New Database User**
   - Username: `admin` (or your choice)
   - Password: Generate secure password (save it!)
   - Database User Privileges: **Atlas admin**
5. Whitelist your IP:
   - Go to **Network Access** → **Add IP Address**
   - Click **Allow Access from Anywhere** (for now, or add your IP)
6. Get connection string:
   - Go to **Database** → **Connect** → **Connect your application**
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### Option B: Local MongoDB

```bash
# Install MongoDB locally, then use:
MONGODB_URI=mongodb://localhost:27017/saas-boilerplate
```

---

## Step 2: Set Up Stripe (For Real Payments)

### 2.1 Create Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete account setup (business details, bank account)
3. **Important**: Add your bank account to receive payments!

### 2.2 Get Stripe API Keys

1. Go to **Developers** → **API keys**
2. You'll see two sets of keys:
   - **Test mode** (for testing - no real money)
   - **Live mode** (for real payments - real money)

**For Production (Real Payments):**
- Copy **Live** publishable key (starts with `pk_live_...`)
- Copy **Live** secret key (starts with `sk_live_...`)

**For Testing First:**
- Use **Test** keys (starts with `pk_test_...` and `sk_test_...`)

### 2.3 Create Products in Stripe

1. Go to **Products** → **Add Product**

2. **For One-Time Payment (Lifetime Access):**
   - Name: "Lifetime Access" (or your product name)
   - Description: "One-time payment for lifetime access"
   - Pricing: **One-time**
   - Price: $49.00 (or your price)
   - Currency: USD
   - Click **Save**
   - **Copy the Price ID** (starts with `price_...`)

3. **For Subscriptions (Optional):**
   - Create products for each plan:
     - Starter Monthly
     - Starter Yearly
     - Pro Monthly
     - Pro Yearly
     - Expert Monthly
     - Expert Yearly
   - Copy each Price ID

### 2.4 Set Up Webhook (Critical!)

**For Local Development:**
1. Install Stripe CLI: [stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
2. Login: `stripe login`
3. Forward webhooks: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
4. Copy the webhook signing secret (starts with `whsec_...`)

**For Production (After Deployment):**
1. Go to **Developers** → **Webhooks** → **Add endpoint**
2. Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
3. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
4. Click **Add endpoint**
5. **Copy the webhook signing secret** (starts with `whsec_...`)

---

## Step 3: Set Up Email Service (Resend)

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email
4. Go to **API Keys** → **Create API Key**
5. Name it: "Production" (or any name)
6. **Copy the API key** (starts with `re_...`)

**Note**: Free tier includes 3,000 emails/month

### Verify Your Domain (Optional but Recommended)

1. Go to **Domains** → **Add Domain**
2. Add your domain (e.g., `yourdomain.com`)
3. Add DNS records to your domain provider
4. Wait for verification (usually 5-10 minutes)
5. Once verified, update email `from` address in `libs/email.js`

---

## Step 4: Create Environment Variables File

1. In your project root, create `.env.local` file:

```bash
# Copy from env.example
cp env.example .env.local
```

2. Open `.env.local` and fill in all values:

```env
# MongoDB
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Generate NEXTAUTH_SECRET:
# Run: openssl rand -base64 32
# Copy the output and paste it here

# Google OAuth (Optional - skip if not using)
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

# Stripe - USE LIVE KEYS FOR REAL PAYMENTS
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_LIVE_KEY
STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_SECRET_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET

# Stripe Price IDs - Replace with YOUR Price IDs from Stripe
NEXT_PUBLIC_STRIPE_PRICE_LIFETIME=price_YOUR_LIFETIME_PRICE_ID

# Subscription Price IDs (if using subscriptions)
STRIPE_PRICE_STARTER_MONTHLY=price_YOUR_STARTER_MONTHLY_ID
STRIPE_PRICE_STARTER_YEARLY=price_YOUR_STARTER_YEARLY_ID
STRIPE_PRICE_PRO_MONTHLY=price_YOUR_PRO_MONTHLY_ID
STRIPE_PRICE_PRO_YEARLY=price_YOUR_PRO_YEARLY_ID
STRIPE_PRICE_EXPERT_MONTHLY=price_YOUR_EXPERT_MONTHLY_ID
STRIPE_PRICE_EXPERT_YEARLY=price_YOUR_EXPERT_YEARLY_ID

# Email Service (Resend)
RESEND_API_KEY=re_YOUR_RESEND_API_KEY
```

### Generate NEXTAUTH_SECRET

Run this command in your terminal:

```bash
openssl rand -base64 32
```

Copy the output and paste it as `NEXTAUTH_SECRET` in `.env.local`

---

## Step 5: Install Dependencies & Test Locally

```bash
# Install packages
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` and test:
- [ ] Register a new account
- [ ] Login
- [ ] Try checkout (use Stripe test card: `4242 4242 4242 4242`)
- [ ] Check if webhook updates user access
- [ ] Check if email is sent

**Stripe Test Cards:**
- Success: `4242 4242 4242 4242`
- Any future expiry date
- Any 3-digit CVC
- Any ZIP code

---

## Step 6: Deploy to Production

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign up
3. Click **Add New Project**
4. Import your GitHub repository
5. **Add Environment Variables** (IMPORTANT!):
   - Copy ALL variables from `.env.local`
   - **Change `NEXTAUTH_URL`** to your production URL: `https://yourdomain.com`
   - **Use LIVE Stripe keys** (not test keys)
   - **Use production webhook secret** (from Stripe Dashboard)

6. Click **Deploy**

### Update Stripe Webhook for Production

1. After deployment, go to Stripe Dashboard → **Webhooks**
2. Add new endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select the same events as before
4. Copy the new webhook secret
5. Update `STRIPE_WEBHOOK_SECRET` in Vercel environment variables

### Update Email From Address (Optional)

Edit `libs/email.js` line 5:

```javascript
from = 'Your Product <noreply@yourdomain.com>'
```

**Note**: You need to verify your domain in Resend first!

---

## Step 7: Verify Everything Works

### Test Checklist:

1. **Registration & Login**
   - [ ] Can register new user
   - [ ] Can login with credentials
   - [ ] Session persists

2. **Payment Flow**
   - [ ] Click checkout button
   - [ ] Redirects to Stripe checkout
   - [ ] Can complete payment (use real card for testing)
   - [ ] Redirects back to dashboard
   - [ ] User gets access (`hasAccess: true`)

3. **Webhook**
   - [ ] Check Stripe Dashboard → **Webhooks** → **Events**
   - [ ] See `checkout.session.completed` event
   - [ ] Check MongoDB - user has `hasAccess: true`

4. **Email**
   - [ ] User receives payment confirmation email
   - [ ] Email looks correct
   - [ ] Links work

5. **Access Control**
   - [ ] User without payment sees paywall
   - [ ] User with payment sees full dashboard

---

## 🎯 Quick Reference

### Where Money Goes
- **Stripe Account** → Your connected bank account
- Check: Stripe Dashboard → **Payments** → **All payments**

### Where to Check Payments
- Stripe Dashboard → **Payments**
- Stripe Dashboard → **Customers**
- MongoDB → Users collection → `hasAccess: true`

### Where to Check Emails
- Resend Dashboard → **Emails** → **Logs**
- Check user's email inbox

### Common Issues

**Payment not working?**
- Check Stripe keys are LIVE (not test)
- Check webhook is configured correctly
- Check webhook secret matches
- Check Price IDs are correct

**Email not sending?**
- Check `RESEND_API_KEY` is set
- Check Resend dashboard for errors
- Verify domain if using custom domain

**User not getting access?**
- Check webhook is receiving events
- Check MongoDB connection
- Check webhook handler logs

---

## 🔒 Security Checklist

- [ ] Never commit `.env.local` to Git (it's in `.gitignore`)
- [ ] Use environment variables in Vercel (not hardcoded)
- [ ] Use LIVE Stripe keys only in production
- [ ] Verify webhook signature (already implemented)
- [ ] Use HTTPS in production (Vercel does this automatically)

---

## 📞 Need Help?

- Stripe Docs: [stripe.com/docs](https://stripe.com/docs)
- Resend Docs: [resend.com/docs](https://resend.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- MongoDB Atlas Docs: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)

---

## ✅ You're Done!

Once all steps are complete, your app will:
- ✅ Accept real payments → Money goes to your Stripe account → Your bank
- ✅ Send email updates automatically
- ✅ Grant access after payment
- ✅ Fully functional and production-ready!

**Next Steps:**
- Customize the product/features
- Update branding and content
- Add your own features
- Start marketing! 🚀





