import Grouping from "../../models/groups"

export default defineEventHandler(async (event) => {
    if (event.context.params?.name === undefined) {
        throw createError({ statusCode: 400, message: "Missing grouping name parameter" })
    }

    try {
        const group = await Grouping.findOne({ name: event.context.params?.name })

        if (group == null) {
            throw createError({ statusCode: 404, message: "Grouping not found" })
        }

        return group
    } catch (e: any) {
        throw createError({ statusCode: 500, message: e?.message })
    }

})