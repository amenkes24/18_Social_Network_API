const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // email: true 
    },
    thoughts: [],
    friends: []
});

// create a virtual called friendCount that retrieves the length of the users friends array feild on query

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User Model
module.exports = User;