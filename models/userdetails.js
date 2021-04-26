const mongoose = require('mongoose')
const { objectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        index: true
    },
    email : {
        type : String,
        required : true,
        index: true
    },
    password: {
        type: String,
        required : true
    },
    round1status : {
        type : Boolean,
        default : false
    },
    round2status : {
        type : Boolean,
        default : false
    },
    round3status : {
        type : Boolean,
        default : false
    },
    vendorselected : String,
    round1selections : [
        {round1b : {
            option1 : {
                type : Boolean,
                default : false
            },
            option2 : {
                type : Boolean,
                default : false
            }

        }
    },
    {round1c : {
            field1 : {
                type : String,
                required : true,
                index: true
            },
            field2 : {
                type : String,
                required : true,
                index: true
            },
            field3 : {
                type : String,
                required : true,
                index: true
            }
           
        }}
    ],
    round2selections : {
        type : Array,
        default : []
    },
    round3selections : {
        type : Array,
        default : []
    },

}, { timestamps : true });

module.exports = mongoose.model('userd', userSchema);