const mongoose = require('mongoose') //npm install mongoose
const mongooseUniqueValidator = require('mongoose-unique-validator') //npm install mongoose-unique-validator
const { isEmail } = require('validator')

const userSchema = mongoose.Schema({
    pseudo: { type: String, require: true, unique: true, trim: true, minlength: 3, maxlength: 50 },
    email: { type: String, require: true, unique: true, validate: [isEmail] },                            // String — adresse e-mail de l'utilisateur [unique]
    password: { type: String, require: true },                                                            // String — mot de passe de l'utilisateur haché
    bio: { type: String, require: true, max: 300 },
    imageUrl: { type: String, require:true},
},
    { timestamps: true }
)

userSchema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('User', userSchema)