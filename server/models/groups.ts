import { Schema, model } from 'mongoose'

const groupingSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    groups: {
        type: Array,
        require: true
    }
}, {timestamps: true})

groupingSchema.index(
    {createdAt: 1},
    {expireAfterSeconds: 60 * 5 }
)

const Grouping = model('Grouping', groupingSchema)

export default Grouping