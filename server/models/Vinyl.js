const mongoose = require('mongoose');

const { Schema } = mongoose;

const vinylSchema =  new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    artist: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    tracklist: {
        type: String
    },
    genre: {
        type: String,
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    },
    /*listingDate: {
        type: Date,
        default: Date.now
    }*/
    });

const Vinyl = mongoose.model('Vinyl', vinylSchema);

module.exports = Vinyl;
