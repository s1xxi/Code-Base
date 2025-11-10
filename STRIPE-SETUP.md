# 🔥 Stripe Setup - Marc Lou Style (One-Time Payment)

This boilerplate uses **ONE-TIME PAYMENT** for lifetime access (not subscriptions).

---

## 📋 **Step 1: Create Stripe Product**

1. Go to: https://dashboard.stripe.com/test/products
2. Click **"+ Add product"**
3. Fill in:
   - **Name:** `Lifetime Access` (or your product name)
   - **Description:** `One-time payment for lifetime access`
   - **Pricing:**
     - **Standard pricing:** Select `One time`
     - **Price:** `49.00` (or your price)
     - **Currency:** `USD`
4. Click **"Save product"**
5. **COPY the Price ID** (starts with `price_xxxx`) - you'll need this!

---

## 📋 **Step 2: Create Webhook**

1. Go to: https://dashboard.stripe.com/test/webhooks
2. Click **"+ Add endpoint"**
3. **Endpoint URL:** `https://your-domain.com/api/stripe/webhook`
   - For local testing: Use `https://your-domain.com/api/stripe/webhook` (you'll need to use Vercel first)
   - For production: `https://your-actual-domain.com/api/stripe/webhook`
4. **Events to listen to:**
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click **"Add endpoint"**
6. **COPY the Signing secret** (starts with `whsec_xxxx`)

---

## 📋 **Step 3: Add to Environment Variables**

### **For Local Development (.env.local):**

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51xxxxx
STRIPE_SECRET_KEY=sk_test_51xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_LIFETIME=price_xxxxx
```

### **For Vercel (Production):**

Go to your Vercel project → Settings → Environment Variables

Add all 4 variables above.

**IMPORTANT:** Change `pk_test` and `sk_test` to `pk_live` and `sk_live` for production!

---

## 🧪 **Step 4: Test the Flow**

1. **Register an account** on your site
2. **Click "Get Lifetime Access"**
3. **Use Stripe test card:**
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/34`)
   - CVC: Any 3 digits (e.g., `123`)
4. **Complete payment**
5. **You should be redirected to dashboard with access!**

---

## ✅ **What Happens:**

1. User clicks "Get Lifetime Access - $49"
2. Stripe checkout opens
3. User pays (one-time)
4. Stripe sends webhook to `/api/stripe/webhook`
5. Webhook sets `user.hasAccess = true` in database
6. User redirected to dashboard
7. **User has lifetime access!** (never expires)

---

## 🔍 **Troubleshooting:**

### **Payment doesn't unlock access:**
- Check Vercel logs for webhook errors
- Make sure `STRIPE_WEBHOOK_SECRET` is correct
- Check MongoDB - is `hasAccess` set to `true`?

### **Webhook not receiving events:**
- Make sure webhook URL is correct
- Check Stripe Dashboard → Webhooks → Events
- Look for failed webhook attempts

### **"No such price" error:**
- Make sure `NEXT_PUBLIC_STRIPE_PRICE_LIFETIME` is correct
- Copy it from Stripe Dashboard → Products → Your Product → Price ID

---

## 💡 **Pro Tips:**

- Test in **test mode** first (use `pk_test` and `sk_test`)
- When ready for production, switch to **live mode** keys
- Monitor your Stripe dashboard for payments
- Check Vercel logs for any errors

---

**That's it! Your one-time payment system is ready to ship!** 🚀

