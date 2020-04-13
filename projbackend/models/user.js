const mongoose = require("mongoose")

var userSchema = new Schema({
    name:{
        type: String,
        require: true,
        maxlength: 32,
        trim: true
    },

    lastname:{
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type:String,
        trim: true,
        require: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true

    },
    encry_password: {
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Number, 
        default: 0
    },
    purchases: {
        type: Array,
        default:[]
    }
  });


  userSchema.method = {
      securePassword: function(plainpassword){
          if (!password) return "";
          try{
              return crypto.creatHmac('sha256', this.salt)
              .update(plainpassword)
              .digest('hex');

          } catch (err){
              return "";
          }
      }
  }

  
  module.exports = mongoose.model("User", userSchema)