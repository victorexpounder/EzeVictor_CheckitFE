import axios from "axios"

export const getCapsules = async() =>{
    try {
        const res = await axios.get("https://api.spacexdata.com/v3/capsules")
        return res.data
    } catch (error) {
        console.log(error) 
    }
}