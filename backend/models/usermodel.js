const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema
const Schema = mongoose.Schema

const Usermodel = new Schema({
    first_name: {
        type: String,
        require: true,
        trim: true,
        text: true, 
    },

    last_name: {
        type: String,
        require: true,
        trim: true,
        text: true, 
    },

    username: {
        type: String,
        require: true,
        trim: true,
        text: true, 
        unique: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
    },

    password: {
        type: String,
        require: true,
    },

    cover: {
        type: String,
        require: true,
        trim: true,
    },

    gender: {
        type: String,
        require: true,
        trim: true,
    },

    birth_day: {
        type: Number,
        require: true,
        trim: true,
    },

    birth_month: {
        type: Number,
        require: true,
        trim: true,
    },

    birth_year: {
        type: Number,
        require: true,
        trim: true,
    },

    verified: {
        type: Boolean,
    },

    friends: {
        type: ObjectId,
        ref: 'User',
    },

    followers: {
        type: ObjectId,
        ref: 'User',
    },

    following: {
        type: ObjectId,
        ref: 'User',
    },

    requests: {
        type: ObjectId,
        ref: 'User',
    },

    search: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
                required: true,
            },

            createdAt: {
                type: Date,
                require: true,
            }
        }
    ],

    details: {
        bio: {
            type: String,
        },

        othername: {
            type: String,
        },

        job: {
            type: String,
        },

        currentcity: {
            type: String,
        },

        workplace: {
            type: String,
        },

        college: {
            type: String,
        },

        highschool: {
            type: String,
        },

        hometown: {
            type: String,
        },

        hometown: {
            type: String,
        },
        hometown: {
            type: String,
        },

        relationship: {
            type: String,
            enum: [
                'Single',
                'In a relationship',
                'It is complicated',
                'Married',
                'Divorced',
            ]
     
        },

        instagram: {
            type: String,
        },

        savePost: [
            {
                post: {
                    type: ObjectId,
                    ref: 'Post',
                },

                savedAt: {
                    type: ObjectId,
                    required: true,
                }
            }
        ]


    }

    
    
},

{
    timestamps: true,
}

)


module.exports = mongoose.model('User', Usermodel)