import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String, 
        required: true, 
        lowercase: true, 
        unique: true
    },
    },{
        timestamps: true,
    });

const Profile = mongoose.model('Profile', profileSchema);

export { Profile }
