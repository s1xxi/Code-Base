# 🔑 Credentials Needed to Get Everything Working

## What I Need From You

Provide these 5 sets of credentials and I'll configure everything:

---

## 1. MongoDB Atlas

**What I need:**
- Connection string (looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/...`)

**Where to find it:**
1. Go to MongoDB Atlas dashboard
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Make sure `<password>` is replaced with your actual password

**Example:**
```
MONGODB_URI=mongodb+srv://admin:MyPassword123@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
```

---

## 2. Stripe

**What I need:**
- Publishable Key (starts with `pk_test_` or `pk_live_`)
- Secret Key (starts with `sk_test_` or `sk_live_`)
- At least ONE Price ID (starts with `price_`)

**Where to find them:**
1. Go to Stripe Dashboard
2. Make sure you're in the right mode (Test or Live)
3. Go to "Developers" → "API keys"
4. Copy:
   - Publishable key
   - Secret key (click "Reveal")
5. Go to "Products" → Click on a product → Copy the Price ID

**Example:**
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51AbC123...
STRIPE_SECRET_KEY=sk_test_51XyZ789...
NEXT_PUBLIC_STRIPE_PRICE_LIFETIME=price_1AbC123...
```

**Optional (if you have subscription plans):**
- `STRIPE_PRICE_STARTER_MONTHLY=price_...`
- `STRIPE_PRICE_STARTER_YEARLY=price_...`
- `STRIPE_PRICE_PRO_MONTHLY=price_...`
- `STRIPE_PRICE_PRO_YEARLY=price_...`
- `STRIPE_PRICE_EXPERT_MONTHLY=price_...`
- `STRIPE_PRICE_EXPERT_YEARLY=price_...`

---

## 3. Resend (Email Service)

**What I need:**
- API Key (starts with `re_`)

**Where to find it:**
1. Go to Resend dashboard
2. Go to "API Keys"
3. Copy your API key (or create a new one)

**Example:**
```
RESEND_API_KEY=re_AbC123XyZ789...
```

---

## 4. NextAuth Secret

**What I need:**
- A secret key (I can generate this for you, or you can provide one)

**If you don't have one:**
- I'll generate it using: `openssl rand -base64 32`

**If you already have one:**
- Just provide it

**Example:**
```
NEXTAUTH_SECRET=AbC123XyZ789... (long random string)
```

---

## 5. Google OAuth (OPTIONAL)

**What I need:**
- Client ID
- Client Secret

**Where to find them:**
1. Go to Google Cloud Console
2. Create OAuth 2.0 credentials
3. Copy Client ID and Client Secret

**Example:**
```
GOOGLE_ID=123456789-abc.apps.googleusercontent.com
GOOGLE_SECRET=GOCSPX-abc123xyz789
```

**Note:** This is OPTIONAL - the app works without it (users just won't be able to login with Google)

---

## 📝 Summary - What to Send Me

Just paste these in your message:

```
MongoDB URI: mongodb+srv://...
Stripe Publishable: pk_test_...
Stripe Secret: sk_test_...
Stripe Price ID: price_...
Resend API Key: re_...
NextAuth Secret: (I can generate or you provide)
Google ID: (optional)
Google Secret: (optional)
```

---

## ✅ After You Provide These

I will:
1. ✅ Update your `.env.local` file with all credentials
2. ✅ Verify the format is correct
3. ✅ Test that the app can start
4. ✅ Make sure everything is configured properly

**Then you can just run `npm run dev` and everything will work!** 🚀

---

## 🔒 Security Note

**Important:** After we're done, make sure:
- ✅ `.env.local` is in `.gitignore` (so it's not committed to git)
- ✅ Never share these credentials publicly
- ✅ Use test keys for development, live keys only in production

---

**Ready when you are! Just paste the credentials above.** 🎯


