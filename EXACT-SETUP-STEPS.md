# 🎯 EXACT SETUP STEPS - Follow These Exactly

This guide tells you **exactly** what accounts to create and what to do. Follow step by step.

---

## ✅ STEP 1: Create MongoDB Atlas Account (FREE)

**What you need:** A database to store users and payment info

### Actions:
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Click **"Try Free"** or **"Sign Up"**
3. Fill in:
   - Email
   - Password
   - First/Last name
   - Company (optional - can use "Personal")
4. Click **"Create your Atlas account"**
5. Verify your email if asked

### Create Database:
1. After login, click **"Build a Database"**
2. Choose **FREE** tier (M0 Sandbox)
3. Choose a cloud provider (AWS recommended)
4. Choose a region closest to you
5. Click **"Create"**
6. Wait 1-3 minutes for cluster to be created

### Get Connection String:
1. Click **"Connect"** button on your cluster
2. Choose **"Connect your application"**
3. Driver: **Node.js**
4. Version: **5.5 or later**
5. **Copy the connection string** (looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)

### Set Up Database User:
1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Authentication Method: **Password**
4. Username: `admin` (or your choice)
5. Password: Click **"Autogenerate Secure Password"** → **Copy it!** (or create your own)
6. Database User Privileges: **Atlas admin**
7. Click **"Add User"**

### Update Connection String:
- Replace `<password>` in the connection string with the password you just created
- Example: `mongodb+srv://admin:MyPassword123@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### Allow Network Access:
1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for now - you can restrict later)
4. Click **"Confirm"**

**✅ SAVE THIS:** Your MongoDB connection string (with password replaced)

---

## ✅ STEP 2: Create Stripe Account (FREE to start)

**What you need:** To accept payments and get money

### Actions:
1. Go to: https://dashboard.stripe.com/register
2. Fill in:
   - Email
   - Password
   - Country
3. Click **"Create account"**
4. Verify your email

### Complete Business Setup:
1. Fill in business details:
   - Business type (Individual or Company)
   - Business name
   - Website (can use placeholder like `https://example.com` for now)
   - Business description
2. Click **"Continue"**

### Add Bank Account (CRITICAL - to receive money):
1. Go to **"Settings"** → **"Bank accounts and scheduling"**
2. Click **"Add bank account"**
3. Enter your bank account details:
   - Account holder name
   - Account number
   - Routing number (US) or other bank details
4. Complete verification (Stripe will make small test deposits)
5. **This is where your money will go!**

### Get API Keys:
1. Make sure you're in **"Live mode"** (toggle in top right - switch from "Test mode" to "Live mode")
2. Go to **"Developers"** → **"API keys"**
3. You'll see:
   - **Publishable key** (starts with `pk_live_...`)
   - **Secret key** (starts with `sk_live_...`) - Click **"Reveal test key"** to see it
4. **Copy both keys**

**✅ SAVE THESE:**
- Publishable key: `pk_live_...`
- Secret key: `sk_live_...`

### Create Products:
1. Go to **"Products"** in left sidebar
2. Click **"Add product"**

#### For One-Time Payment (Lifetime Access):
- **Name:** "Lifetime Access" (or your product name)
- **Description:** "One-time payment for lifetime access to all features"
- **Pricing model:** Select **"One-time"**
- **Price:** Enter your price (e.g., `49.00`)
- **Currency:** USD (or your currency)
- **Billing period:** (not applicable for one-time)
- Click **"Save product"**
- **Copy the Price ID** (starts with `price_...`)

#### For Subscriptions (Optional - if you want monthly/yearly):
Repeat for each plan:
- Starter Monthly ($X/month)
- Starter Yearly ($X/year)
- Pro Monthly ($X/month)
- Pro Yearly ($X/year)
- Expert Monthly ($X/month)
- Expert Yearly ($X/year)

**✅ SAVE THESE:** All Price IDs (starts with `price_...`)

### Set Up Webhook (Do this AFTER deployment):
**We'll do this in Step 6 after you deploy your site.**

---

## ✅ STEP 3: Create Resend Account (FREE)

**What you need:** To send emails to customers

### Actions:
1. Go to: https://resend.com/signup
2. Click **"Sign up"**
3. Sign up with:
   - Email
   - Password
   - Or use Google/GitHub
4. Verify your email

### Get API Key:
1. After login, go to **"API Keys"** in left sidebar
2. Click **"Create API Key"**
3. Name: `Production` (or any name)
4. Permission: **"Sending access"**
5. Click **"Add"**
6. **Copy the API key** (starts with `re_...`)
7. **Save it now** - you won't see it again!

**✅ SAVE THIS:** API key: `re_...`

### (Optional) Verify Domain:
1. Go to **"Domains"** → **"Add Domain"**
2. Enter your domain (e.g., `yourdomain.com`)
3. Add DNS records to your domain provider
4. Wait for verification
5. Once verified, you can use `noreply@yourdomain.com` instead of default

---

## ✅ STEP 4: Create GitHub Account (FREE)

**What you need:** To deploy your code

### Actions:
1. Go to: https://github.com/signup
2. Fill in:
   - Username
   - Email
   - Password
3. Verify your email
4. Complete setup

**✅ DONE:** You now have a GitHub account

---

## ✅ STEP 5: Set Up Your Code

### Generate NextAuth Secret:
Open your terminal/command prompt and run:
```bash
openssl rand -base64 32
```
**Copy the output** - this is your `NEXTAUTH_SECRET`

### Create .env.local File:
1. In your project folder, create a file named `.env.local`
2. Open it in a text editor
3. Copy and paste this template, then fill in your values:

```env
# MongoDB - Paste your connection string from Step 1
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

# NextAuth - Use the secret you generated above
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=paste_the_openssl_output_here

# Google OAuth (Optional - skip if not using)
# GOOGLE_ID=your-google-client-id
# GOOGLE_SECRET=your-google-client-secret

# Stripe - Use LIVE keys from Step 2
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=we_will_set_this_after_deployment

# Stripe Price IDs - Use Price IDs from Step 2
NEXT_PUBLIC_STRIPE_PRICE_LIFETIME=price_YOUR_LIFETIME_PRICE_ID_HERE

# Subscription Price IDs (if using subscriptions - optional)
STRIPE_PRICE_STARTER_MONTHLY=price_YOUR_STARTER_MONTHLY_ID
STRIPE_PRICE_STARTER_YEARLY=price_YOUR_STARTER_YEARLY_ID
STRIPE_PRICE_PRO_MONTHLY=price_YOUR_PRO_MONTHLY_ID
STRIPE_PRICE_PRO_YEARLY=price_YOUR_PRO_YEARLY_ID
STRIPE_PRICE_EXPERT_MONTHLY=price_YOUR_EXPERT_MONTHLY_ID
STRIPE_PRICE_EXPERT_YEARLY=price_YOUR_EXPERT_YEARLY_ID

# Email Service (Resend) - Use API key from Step 3
RESEND_API_KEY=re_YOUR_API_KEY_HERE
```

### Install Dependencies:
Open terminal in your project folder and run:
```bash
npm install
```

### Test Locally:
```bash
npm run dev
```
Visit: http://localhost:3000

**Test with Stripe test mode first:**
- Temporarily switch to test keys in `.env.local`
- Use test card: `4242 4242 4242 4242`
- Any future expiry date, any CVC, any ZIP

---

## ✅ STEP 6: Deploy to Vercel (FREE)

**What you need:** To make your site live on the internet

### Push Code to GitHub:
1. Open terminal in your project folder
2. Run these commands (replace with your GitHub username):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**If you don't have a GitHub repo yet:**
1. Go to GitHub.com
2. Click **"New repository"**
3. Name it (e.g., `my-saas-app`)
4. Click **"Create repository"**
5. Copy the repository URL
6. Use it in the commands above

### Deploy to Vercel:
1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel
4. Click **"Add New Project"**
5. Import your GitHub repository
6. Click **"Import"**

### Add Environment Variables:
1. In Vercel project settings, go to **"Environment Variables"**
2. Add each variable from your `.env.local`:

**IMPORTANT:** 
- Change `NEXTAUTH_URL` to your Vercel URL: `https://your-project.vercel.app`
- Use **LIVE Stripe keys** (not test keys)
- Leave `STRIPE_WEBHOOK_SECRET` empty for now (we'll set it next)

Add these variables:
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
NEXT_PUBLIC_STRIPE_PRICE_LIFETIME=price_your_price_id
RESEND_API_KEY=re_your_api_key
```

3. Click **"Deploy"**
4. Wait 2-3 minutes for deployment
5. **Copy your site URL** (e.g., `https://your-project.vercel.app`)

---

## ✅ STEP 7: Set Up Stripe Webhook (CRITICAL)

**What you need:** So Stripe can tell your app when payments happen

### Actions:
1. Go to Stripe Dashboard → **"Developers"** → **"Webhooks"**
2. Click **"Add endpoint"**
3. Endpoint URL: `https://your-project.vercel.app/api/stripe/webhook`
   - Replace `your-project.vercel.app` with your actual Vercel URL
4. Description: `Production webhook`
5. Click **"Select events"**
6. Select these events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
7. Click **"Add events"**
8. Click **"Add endpoint"**
9. **Copy the "Signing secret"** (starts with `whsec_...`)

### Add Webhook Secret to Vercel:
1. Go back to Vercel → Your project → **"Settings"** → **"Environment Variables"**
2. Add:
   - Key: `STRIPE_WEBHOOK_SECRET`
   - Value: `whsec_...` (the secret you just copied)
3. Click **"Save"**
4. Go to **"Deployments"** → Click the 3 dots on latest deployment → **"Redeploy"**

---

## ✅ STEP 8: Test Everything

### Test Registration:
1. Go to your live site: `https://your-project.vercel.app`
2. Click **"Register"** or **"Sign Up"**
3. Create an account
4. Check if you can login

### Test Payment:
1. Login to your site
2. Go to dashboard (should show paywall)
3. Click checkout/payment button
4. Use a **real credit card** with a small amount (like $1)
5. Complete payment
6. Check:
   - ✅ Redirects back to dashboard
   - ✅ Shows success message
   - ✅ User now has access (no paywall)

### Verify Payment in Stripe:
1. Go to Stripe Dashboard → **"Payments"**
2. You should see the payment
3. Money should be in your Stripe account

### Verify Webhook:
1. Go to Stripe Dashboard → **"Developers"** → **"Webhooks"**
2. Click on your webhook endpoint
3. Go to **"Events"** tab
4. You should see `checkout.session.completed` event
5. Click on it → Should show "Succeeded"

### Verify Email:
1. Check the email you used for registration
2. You should receive a payment confirmation email
3. Check Resend Dashboard → **"Emails"** → **"Logs"** to see sent emails

### Verify Database:
1. Go to MongoDB Atlas → **"Browse Collections"**
2. Find your database → `users` collection
3. Find your user
4. Check: `hasAccess` should be `true`

---

## 🎉 YOU'RE DONE!

Your app is now fully functional:
- ✅ Accepts real payments → Money goes to your Stripe account → Your bank
- ✅ Sends emails automatically
- ✅ Grants access after payment
- ✅ Fully production-ready

---

## 📋 Quick Reference

### Where to Check Things:

**Payments:**
- Stripe Dashboard → Payments
- Stripe Dashboard → Customers

**Emails:**
- Resend Dashboard → Emails → Logs
- Customer's email inbox

**Users:**
- MongoDB Atlas → Browse Collections → users

**Errors:**
- Vercel Dashboard → Your project → Functions → Logs
- Stripe Dashboard → Developers → Webhooks → Events

---

## 🆘 Troubleshooting

**Payment not working?**
- Check Stripe keys are LIVE (not test)
- Check webhook is configured
- Check Price IDs are correct

**Email not sending?**
- Check RESEND_API_KEY is set
- Check Resend dashboard for errors

**User not getting access?**
- Check webhook received event (Stripe Dashboard)
- Check MongoDB connection
- Check webhook secret matches

**Need help?**
- Check the detailed guide: `SETUP-COMPLETE-GUIDE.md`
- Check Stripe docs: https://stripe.com/docs
- Check Resend docs: https://resend.com/docs

---

## ✅ Final Checklist

Before going live, make sure:
- [ ] All environment variables are set in Vercel
- [ ] Using LIVE Stripe keys (not test)
- [ ] Webhook is configured and working
- [ ] Tested a real payment
- [ ] Email is sending
- [ ] User gets access after payment
- [ ] Money appears in Stripe account

**You're ready to sell! 🚀**





