import axios from "axios";
import handleError from "./handleError.js";

const vamMuseum = axios.create({ baseURL: "https://api.vam.ac.uk/v2/objects/search" })


const fetchObjectsWithImages = async () => {
    // console.log("Hello")
    try {
        const response = await vamMuseum.get("", {
            params: {q: "sculpture", images_exist:1, page: 1, page_size: 100 }});
            let results = response.data.records
            results.forEach(element => {
                // console.log(element["_primaryImageId"])
            });
       return response.data.records

    } catch (error) {
        handleError(error);
    }
};



const fetchRandomObjects = async()=>{
    const newArray = []
    let count = 0
    while(newArray.length < 200){
        const imagedObjects = await fetchObjectsWithImages()
        imagedObjects.forEach((object) => {
            if(object["_primaryTitle"]){
                newArray.push(object)
            }
        })
        count ++
    }

    const pickRandomObjects = (randomArray, numRandom = 9) => {
    return randomArray.sort(() => Math.random() - 0.5).slice(0, numRandom);
    }
    
    const randomArray = pickRandomObjects(newArray, 9)
    // randomArray.forEach((obj) => {console.log(obj["_primaryImageId"])})
    return randomArray

}

fetchRandomObjects()








export default {fetchObjectsWithImages, fetchRandomObjects}

