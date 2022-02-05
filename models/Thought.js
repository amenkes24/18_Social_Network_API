const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');
const dateFormat = require('../utils/dateFormat')
const reactionSchema = require('./Reaction')

const ThoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
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