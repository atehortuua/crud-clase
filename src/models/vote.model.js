import mongoose, {Schema} from "mongoose";
const voteSchema = new mongoose.Schema(
{
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        requiered : true,
    
    },

    product :  {
        type: Schema.Types.ObjectId,
        ref : "Product",
        required : true,
    }, 
},
{timestamps: true}
);

voteSchema.index({user : 1, product: 1 }, {unique: true});

const vote = mongoose.model("Vote", voteSchema);
export default vote;