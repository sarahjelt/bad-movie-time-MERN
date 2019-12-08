const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
  name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  planner: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: "Meal"
    }
  }]
},
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
          return next(err);
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);