import mongoose, {Schema} from "mongoose"

const scheduleSchema = new Schema(
    {
        vehicle: {
            type: Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true
        },
        route: {
            type: Schema.Types.ObjectId,
            ref: "Route",
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endTime: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Schedule = mongoose.model("Schedule", scheduleSchema)