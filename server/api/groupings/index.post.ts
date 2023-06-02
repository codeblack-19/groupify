import Grouping from "../../models/groups"
import { createGroupingSchema } from "../../validation"

export default defineEventHandler(async(event) => {
    const body = await readBody(event)

    let { error } = createGroupingSchema.validate(body)

    if(error){
        throw createError({statusCode: 400, message: error?.message})
    }

    try {
        const grouping = await Grouping.findOne({name: body.name})
        if(grouping){
            throw createError({statusCode: 400, message: "Grouping name already exists"})
        }

        await Grouping.create(body)
        return {message: "Grouping created successfully"}
    } catch (error: any) {
        throw createError({statusCode: 500, message: error?.message})
    } 
})