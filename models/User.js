import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      select: false, // Don't return password by default
    },
    image: String,
    
    // Stripe fields
    customerId: String, // Stripe customer ID
    priceId: String, // Stripe price ID for current subscription
    hasAccess: {
      type: Boolean,
      default: false, // Grant access when subscription is active
    },
    
    // Email verification
    emailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: String,
    emailVerificationExpires: Date,
    
    // Password reset
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)

