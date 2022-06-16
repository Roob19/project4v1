import mongoose from 'mogoose';

const Schema = mongoose.Schema;

const barSchema = new Schema (
    {
        id: {
            type: String, 
            required: true
        }, 
        name: {
            type: String, 
            required: true
        }, 
        alias: {
            type: String
        }, 
        image_url: {
            type: String
        }, 
        is_closed: {
            type: Boolean
        }, 
        url: {
            type: String
        }, 
        review_count: {
            type: Number
        }, 
        rating: {
            type: Number, 
            set: function(num){return Math.round(num*10)/10;}
        }, 
        coordinates: {
            latitude: {
                type: Number, 
                set: function(num){return +(Math.round(num+"e+7")+"e-7");}
            }, 
            longitude: {
                type: Number, 
                set: function(num){return +(Math.round(num+"e+7")+"e-7");}
            }
        }, 
        transactions: {
            type: String
        }, 
        price: {
            type: String
        }, 
        location: {
            address1: {
                type: String
            }, 
            address2: {
                type: String
            }, 
            address3: {
                type: String
            }, 
            city: {
                type: String
            }, 
            zip_code: {
                type: String
            }, 
            country: {
                type: String
            }, 
            state: {
                type: String
            }, 
            display_address: [String]
        }, 
        phone: {
            type: String
        }, 
        display_phone: {
            type: String
        }, 
        distance: {
            type: Number, 
            set: function(num){return +(Math.round(num+"e+11")+"e-11");}
        }
    }
)

const Bar = mongoose.model('Bar', barSchema);

export {
    Bar,
}