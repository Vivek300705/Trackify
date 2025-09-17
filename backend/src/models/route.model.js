import mongoose, {Schema} from "mongoose"

const routeStopSubSchema = new Schema({
    stop: { 
        type: Schema.Types.ObjectId, 
        ref: "Stop", 
        required: true 
    },
    seq: { 
        type: Number, 
        required: true 
    },
    timeFromStart: { 
        type: Number 
    }
}, 
{
    _id: false 
});

const routeSchema = new Schema(
    {
        name: {
            type: String, 
            required: true
        },
        polyline: {
            type: String,
            required: true
        },
        stops: [routeStopSubSchema],
    }
)

export const Route = mongoose.model("Route", routeSchema)