import { Nitro } from 'nitropack'
import mongoose from 'mongoose'

export default async (nitro: Nitro) => {
    const config = useRuntimeConfig()

    try{
        await mongoose.connect(config.mongodburl)
        console.log('Connected to MongoDB')
    }catch(e){
        console.error(e)
    }
}