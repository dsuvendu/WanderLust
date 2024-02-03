const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
    title :{
        type:String,
        required:true
    },
    description :String,
    image :{
        type :String,
        default:"https://unsplash.com/photos/an-orange-floating-in-a-pool-of-water-DPlEQT7Hlpk",
        set :(v) =>
            v === ""?"https://unsplash.com/photos/an-orange-floating-in-a-pool-of-water-DPlEQT7Hlpk"
            :v,
        
    },
    price :Number,
    location :String,
    country : String
})

const Listing = mongoose.model("Listing",listeningSchema);
module.exports = Listing;