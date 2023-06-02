import Grouping from "../../models/groups"

export default defineEventHandler(async (event) => {
    const groups = Grouping.find()
    return groups
})