# 🚀 QUICK SETUP GUIDE

Get your SaaS boilerplate running in 15 minutes.

---

## ✅ STEP 1: MongoDB Setup (5 minutes)

### **Option A: MongoDB Atlas (Recommended - Free Cloud)**

1. Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)

2. **Create Account** - Use Google/Email

3. **Create Free Cluster**:
   - Click "Build a Database"
   - Choose **M0 FREE** tier
   - Select closest region
   - Click "Create"

4. **Create Database User**:
   - Click "Database Access" (left sidebar)
   - Click "Add New Database User"
   - Username: `admin` (or your choice)
   - Password: Generate secure password (save it!)
   - User Privileges: "Atlas admin"
   - Click "Add User"

5. **Allow Network Access**:
   - Click "Network Access" (left sidebar)
   - Click "Add IP Address"
   - Click "Allow Access From Anywhere" (for development)
   - Click "Confirm"

6. **Get Connection String**:
   - Click "Database" (left sidebar)
   - Click "Connect" on your cluster
   - Click "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://admin:<password>@cluster0...`)
   - **IMPORTANT**: Replace `<password>` with your actual password

### **Option B: Local MongoDB** 

1. Download from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Install MongoDB Community Server
3. Use connection string: `mongodb://localhost:27017/saas-boilerplate`

---

## ✅ STEP 2: Environment Variables (2 minutes)

1. **Copy the example file**:
   ```bash
   cp env.example .env.local
   ```

2. **Edit `.env.local`** and add your values:

```env
# MongoDB - PASTE YOUR CONNECTION STRING HERE
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/saas?retryWrites=true&w=majority

# NextAuth - GENERATE A SECRET
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=run-this-command-to-generate-one

# Google OAuth (Optional - skip for now)
GOOGLE_ID=not-configured
GOOGLE_SECRET=not-configured

# Stripe (Optional - skip for now)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=not-configured
STRIPE_SECRET_KEY=not-configured
STRIPE_WEBHOOK_SECRET=not-configured
STRIPE_PRICE_ID_STARTER=not-configured
STRIPE_PRICE_ID_PRO=not-configured
```

3. **Generate NextAuth Secret**:
   
   **Windows PowerShell**:
   ```powershell
   -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | % {[char]$_})
   ```
   
   **Or use this online**: [https://generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)
   
   Copy the generated string and paste it into `NEXTAUTH_SECRET`

---

## ✅ STEP 3: Test Authentication (5 minutes)

1. **Start the server** (if not running):
   ```bash
   npm run dev
   ```

2. **Open browser**: [http://localhost:3000](http://localhost:3000)

3. **Test Registration**:
   - Click "Get Started Free" or "Sign In"
   - Click "Sign up" link
   - Fill in name, email, password
   - Click "Create Account"
   - **SUCCESS**: You should be redirected to dashboard!

4. **Test Logout**:
   - Click your avatar (top right)
   - Click "Logout"
   - **SUCCESS**: You're back on the homepage

5. **Test Login**:
   - Click "Sign In"
   - Enter your email and password
   - Click "Sign In"
   - **SUCCESS**: You're in the dashboard!

---

## ✅ STEP 4: (Optional) Stripe Setup (15 minutes)

### **Only do this if you want to test payments**

1. **Create Stripe Account**: [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)

2. **Get API Keys**:
   - Go to [https://dashboard.stripe.com/test/apikeys](https://dashboard.stripe.com/test/apikeys)
   - Copy "Publishable key" → paste into `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Click "Reveal test key" on "Secret key" → paste into `STRIPE_SECRET_KEY`

3. **Create Products**:
   - Go to [https://dashboard.stripe.com/test/products](https://dashboard.stripe.com/test/products)
   - Click "Add product"
   - **Product 1**: 
     - Name: "Starter Plan"
     - Price: $29/month
     - Click "Save product"
     - Copy the Price ID (starts with `price_`) → paste into `STRIPE_PRICE_ID_STARTER`
   - **Product 2**:
     - Name: "Pro Plan"
     - Price: $99/month
     - Click "Save product"
     - Copy the Price ID → paste into `STRIPE_PRICE_ID_PRO`

4. **Setup Webhook** (for production):
   - Go to [https://dashboard.stripe.com/test/webhooks](https://dashboard.stripe.com/test/webhooks)
   - Click "Add endpoint"
   - Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
   - Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Click "Add endpoint"
   - Copy "Signing secret" → paste into `STRIPE_WEBHOOK_SECRET`

5. **Test Payment**:
   - Go to pricing page on your site
   - Click "Get Started" on a plan
   - Use test card: `4242 4242 4242 4242`
   - Any future date, any CVC
   - **SUCCESS**: You should be redirected after payment!

---

## ✅ STEP 5: (Optional) Google OAuth (10 minutes)

### **Only do this if you want "Sign in with Google"**

1. **Go to Google Cloud Console**: [https://console.cloud.google.com](https://console.cloud.google.com)

2. **Create Project**:
   - Click "Select a project" (top bar)
   - Click "New Project"
   - Name it (e.g., "SaaS App")
   - Click "Create"

3. **Enable OAuth**:
   - Go to "APIs & Services" > "OAuth consent screen"
   - Choose "External"
   - Fill in app name, support email
   - Click "Save and Continue"
   - Skip scopes
   - Add test users (your email)
   - Click "Save and Continue"

4. **Create Credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Application type: "Web application"
   - Name: "SaaS App"
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
   - Click "Create"
   - Copy "Client ID" → paste into `GOOGLE_ID`
   - Copy "Client secret" → paste into `GOOGLE_SECRET`

5. **Test Google Login**:
   - Restart your dev server
   - Go to login page
   - Click "Continue with Google"
   - **SUCCESS**: Sign in with Google account!

---

## 🎉 YOU'RE DONE!

### **What Works Now:**
- ✅ User registration
- ✅ Login/logout
- ✅ Protected dashboard
- ✅ User profiles
- ✅ Database persistence
- ✅ (Optional) Stripe payments
- ✅ (Optional) Google OAuth

### **Test Everything:**
```bash
# 1. Register a new user
# 2. Login
# 3. View dashboard
# 4. Update profile in settings
# 5. Logout
# 6. Login again
# 7. Try payment (if Stripe configured)
```

---

## 🐛 TROUBLESHOOTING

### **Error: "Can't resolve @/libs/next-auth"**
- **Fix**: Make sure `jsconfig.json` exists (it should be created already)

### **Error: "MONGODB_URI not defined"**
- **Fix**: Make sure `.env.local` exists and has the MongoDB connection string

### **Login doesn't work**
- **Fix**: Check MongoDB connection string is correct
- **Fix**: Make sure you replaced `<password>` with actual password
- **Fix**: Make sure IP address is whitelisted in MongoDB Atlas

### **"localhost refused to connect"**
- **Fix**: Make sure `npm run dev` is running
- **Fix**: Check port 3000 isn't used by another app

### **Google login doesn't work**
- **Fix**: Make sure redirect URI is exactly `http://localhost:3000/api/auth/callback/google`
- **Fix**: Restart dev server after adding Google credentials

---

## 📞 NEED HELP?

Check the documentation:
- `README.md` - General overview
- `MODULES.md` - Component documentation
- [Next.js Docs](https://nextjs.org/docs)
- [NextAuth Docs](https://next-auth.js.org)
- [Stripe Docs](https://stripe.com/docs)

