# SaaS Boilerplate

A modern, production-ready SaaS boilerplate built with Next.js 14, Tailwind CSS, NextAuth, MongoDB, and Stripe.

## 🚀 Features

- ✅ **Next.js 14 App Router** - Latest Next.js with Server Components
- ✅ **Authentication** - NextAuth with Email/Password + Google OAuth
- ✅ **Database** - MongoDB with Mongoose ODM
- ✅ **Payments** - Stripe integration with subscriptions
- ✅ **UI/UX** - Beautiful, responsive design with Tailwind CSS + DaisyUI
- ✅ **Protected Routes** - Automatic authentication checks
- ✅ **Production Ready** - Optimized and ready to deploy

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard
│   ├── settings/          # User settings
│   ├── layout.js          # Root layout
│   └── page.js            # Landing page
├── components/            # React components
├── libs/                  # Utility libraries
├── models/                # Mongoose models
└── ...config files
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your values:

#### MongoDB Setup (Required)
- **Option A: MongoDB Atlas (Free)**
  1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
  2. Create free account and cluster
  3. Get connection string
  4. Add to `MONGODB_URI`

- **Option B: Local MongoDB**
  ```bash
  # Install MongoDB locally, then use:
  MONGODB_URI=mongodb://localhost:27017/saas-boilerplate
  ```

#### NextAuth Setup (Required)
Generate a secret key:
```bash
openssl rand -base64 32
```
Add it to `NEXTAUTH_SECRET` in `.env.local`

#### Google OAuth (Optional)
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create project and OAuth credentials
3. Add authorized redirect: `http://localhost:3000/api/auth/callback/google`
4. Add `GOOGLE_ID` and `GOOGLE_SECRET` to `.env.local`

#### Stripe Setup (Optional - for payments)
1. Create [Stripe account](https://stripe.com)
2. Get API keys from Dashboard
3. Create products and get price IDs
4. Add all Stripe variables to `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Usage Guide

### Pages

- **`/`** - Landing page with hero, features, and pricing
- **`/auth/login`** - User login page
- **`/auth/register`** - User registration page
- **`/dashboard`** - Protected dashboard (requires login)
- **`/settings`** - User settings and profile management

### API Routes

- **`POST /api/auth/register`** - Register new user
- **`GET/POST /api/auth/[...nextauth]`** - NextAuth handlers
- **`PATCH /api/user`** - Update user profile
- **`POST /api/stripe/create-checkout`** - Create Stripe checkout
- **`POST /api/stripe/webhook`** - Handle Stripe webhooks

### Components

All components are in `/components`:
- `Header.jsx` - Site header with navigation
- `Hero.jsx` - Landing page hero section
- `Features.jsx` - Features showcase
- `Pricing.jsx` - Pricing cards
- `Footer.jsx` - Site footer
- `ButtonSignin.jsx` - Sign in/out button with dropdown
- `ButtonAccount.jsx` - Stripe checkout button
- `DashboardNav.jsx` - Dashboard navigation

## 🎨 Customization

### Change Colors/Theme
Edit `tailwind.config.js` or use DaisyUI themes:
```javascript
daisyui: {
  themes: ['light', 'dark', 'cupcake', 'corporate'],
}
```

### Modify Content
- Landing page: `app/page.js`
- Components: `components/*.jsx`
- Features list: `components/Features.jsx`
- Pricing plans: `components/Pricing.jsx`

### Add Pages
Create new files in `/app` directory:
```javascript
// app/about/page.js
export default function AboutPage() {
  return <div>About Us</div>
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Environment Variables for Production

Don't forget to add all env variables in your hosting platform:
- `MONGODB_URI`
- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- `GOOGLE_ID` and `GOOGLE_SECRET` (if using)
- All Stripe variables (if using)

### Stripe Webhook Setup

After deployment:
1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

## 🔒 Security

- Passwords are hashed with bcrypt
- Sessions are JWT-based with NextAuth
- Environment variables protect sensitive data
- CSRF protection enabled
- Protected API routes require authentication

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: NextAuth.js
- **Database**: MongoDB + Mongoose
- **Payments**: Stripe
- **Deployment**: Vercel (recommended)

## 🤝 Support

For issues or questions:
1. Check the [Next.js docs](https://nextjs.org/docs)
2. Check the [NextAuth docs](https://next-auth.js.org)
3. Check the [Stripe docs](https://stripe.com/docs)

## 📄 License

MIT License - feel free to use for personal or commercial projects!

---

Built with ❤️ using modern web technologies

