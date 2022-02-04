const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const ThoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
        // use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
// create the thought model using the thoughtschema
const Thought = model('Thought', ThoughtSchema);

// export the thought model
module.exports = Thought;