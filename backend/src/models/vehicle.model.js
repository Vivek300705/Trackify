import mongoose, {Schema} from "mongoose"

const vehicleSchema = new Schema(
    {
        vehicleNumber: {
            type: String, 
            required: true,
            unique: true
        },
        type: {
            type: String,
            enum: ["bus", "car", "other"],
            default: "bus",
            required: true
        },
        capacity: {
            type: Number,
            default: 4
        },
        tags: {
            type: [String]
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "inactive"
        },
        scheduleAssigned: {
            type: Schema.Types.ObjectId,
            ref: "Schedule"
        }, // if schedule not present then operator can mannually assign route.
        routeAssigned: {
            type: Schema.Types.ObjectId,
            ref: "Route"
        },
        operatorAssigned: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        lastSeen: {
            type: Date,
            default: Date.now
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                default: [0, 0]
            }
        },
        speed: {
            type: Number,
            default: 0 // in km/h
        }
    }
)

vehicleSchema.index({ location: "2dsphere" })

export const Vehicle = mongoose.model("Vehicle", vehicleSchema)