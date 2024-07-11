import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['visitor', 'member', 'admin'], default: 'visitor' }
});

<<<<<<< HEAD
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

userSchema.statics.findById = function(id) {
  return this.findOne({ _id: id });
};

const User = mongoose.model('User', userSchema);

export default User;
=======
export default mongoose.model('User', userSchema);
>>>>>>> d098abb31da788da7bc1b3bd1a51c17107121227
