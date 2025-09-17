import mongoose, {Schema} from "mongoose"

const stopSchema = new Schema(
    {
        name: {
            type: String, 
            required: true
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number],
                default: [0, 0]
            }
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        tags: {
            type: [String]
        }
    }
)

stopSchema.index({location: "2dsphere"})

export const Stop = mongoose.model("Stop", stopSchema)