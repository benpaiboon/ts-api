import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  u_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    stress: String
  },
  created: {
    type: Date,
    default: Date.now()
  }
})

const User = mongoose.model('user', userSchema, 'user');

export default User;
