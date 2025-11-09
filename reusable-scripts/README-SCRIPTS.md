# 📦 REUSABLE SCRIPTS - Easy Copy & Paste

**All scripts in ONE flat folder. No confusing nesting!**

---

## 🔐 AUTHENTICATION SCRIPTS

### **auth-button-login.jsx**
**What it does:** Simple button that takes you to login page  
**When to use:** Anywhere you want a "Sign In" button  
**Copy-paste ready:** YES

### **auth-button-logout.jsx**
**What it does:** Button that logs user out  
**When to use:** In navigation menus, account dropdowns  
**Copy-paste ready:** YES

### **auth-button-google.jsx**
**What it does:** "Sign in with Google" button  
**When to use:** Login/register pages for easy OAuth  
**Copy-paste ready:** YES (needs Google OAuth setup)

### **auth-form-login.jsx**
**What it does:** Complete email/password login form  
**When to use:** Main login page  
**Copy-paste ready:** YES

### **auth-form-register.jsx**
**What it does:** Complete signup form (name, email, password)  
**When to use:** Registration page  
**Copy-paste ready:** YES

---

## 💳 PAYMENT SCRIPTS

### **payment-button-checkout.jsx**
**What it does:** Button that starts Stripe checkout  
**When to use:** Pricing pages, upgrade prompts  
**Copy-paste ready:** YES (needs Stripe setup)

### **payment-card-pricing.jsx**
**What it does:** Beautiful pricing plan card  
**When to use:** Pricing pages  
**Copy-paste ready:** YES

---

## 🗄️ DATABASE SCRIPTS

### **database-connection.js**
**What it does:** Connects to MongoDB database  
**When to use:** Backend API routes that need database  
**Copy-paste ready:** YES (needs MongoDB connection string)

### **database-user-model.js**
**What it does:** User database schema (name, email, password, etc.)  
**When to use:** When working with user data  
**Copy-paste ready:** YES

---

## ⚙️ CONFIGURATION SCRIPTS

### **config-auth.js**
**What it does:** Authentication setup (NextAuth configuration)  
**When to use:** Backend authentication system  
**Copy-paste ready:** YES

### **config-stripe.js**
**What it does:** Stripe payment system setup  
**When to use:** Backend payment processing  
**Copy-paste ready:** YES (needs Stripe API keys)

---

## 📋 HOW TO USE THESE SCRIPTS

### **Example 1: Add Login Button Anywhere**
```jsx
// Just copy auth-button-login.jsx content to your file
import LoginButton from './auth-button-login'

function MyPage() {
  return <LoginButton />
}
```

### **Example 2: Add Complete Login Form**
```jsx
// Copy auth-form-login.jsx content
import LoginForm from './auth-form-login'

function LoginPage() {
  return <LoginForm />
}
```

### **Example 3: Add Stripe Payment**
```jsx
// Copy payment-button-checkout.jsx content
import CheckoutButton from './payment-button-checkout'

function PricingPage() {
  return <CheckoutButton priceId="price_123" />
}
```

---

## ✅ WHAT YOU NEED TO MAKE THEM WORK

### **For Authentication (Required):**
1. MongoDB database (free at mongodb.com)
2. Environment variable: `MONGODB_URI`
3. Environment variable: `NEXTAUTH_SECRET`

### **For Google Login (Optional):**
1. Google Cloud project
2. OAuth credentials
3. Environment variables: `GOOGLE_ID`, `GOOGLE_SECRET`

### **For Payments (Optional):**
1. Stripe account (free)
2. Stripe API keys
3. Environment variables: `STRIPE_SECRET_KEY`, etc.

---

## 🎯 SCRIPTS STATUS

| Script | Works Now? | Needs Setup? |
|--------|------------|--------------|
| auth-button-login | ✅ YES | None |
| auth-button-logout | ✅ YES | MongoDB |
| auth-button-google | ✅ YES | MongoDB + Google OAuth |
| auth-form-login | ✅ YES | MongoDB |
| auth-form-register | ✅ YES | MongoDB |
| payment-button-checkout | ✅ YES | MongoDB + Stripe |
| payment-card-pricing | ✅ YES | None |
| database-connection | ✅ YES | MongoDB URI |
| database-user-model | ✅ YES | MongoDB URI |
| config-auth | ✅ YES | Environment variables |
| config-stripe | ✅ YES | Stripe keys |

**All scripts are production-ready code!**

---

## 💡 TIPS FOR NON-CODERS

1. **File names tell you exactly what they do**
   - Starts with the category (auth, payment, database, config)
   - Then the type (button, form, card, connection)
   - Finally the specific function (login, register, checkout)

2. **Each file = ONE purpose**
   - No complicated nesting
   - Easy to find what you need
   - Copy one file, use it anywhere

3. **Comments inside explain everything**
   - Each file has usage examples
   - Props are documented
   - Clear instructions

4. **You can customize easily**
   - Change button text
   - Change colors
   - Add your own features

---

## 🚀 QUICK START

1. **Pick a script** from the list above
2. **Copy its contents** to your project
3. **Import it** in your page
4. **Done!** It just works

**Need help?** See `SETUP.md` in the main folder for detailed setup instructions.

