import axios from "axios";
import handleError from "./handleError.js";

const vamMuseum = axios.create({ baseURL: "https://api.vam.ac.uk/v2/objects/search" })


const fetchObjectsWithImages = async (numOfResults, query) => { //This will filter objects received from the API so that we get good options
    let queryString = "sculpture"

    try {
        
        if(query){queryString = query.split(" ").join("&")}

        const outputObjects = []
        let pageIndex = 1;

        const params = {
            q: queryString,
            images_exist: 1,
            page: pageIndex,
            page_size: 100
        };

        while(outputObjects.length<numOfResults){

            const response = await vamMuseum.get("", {params});
            let results = response.data.records
            results.forEach((object) => {
                if(object["_primaryTitle"] && object["_primaryMaker"]["name"] !== "Unknown" ){ //Checks that the object has a title and an artist
                    outputObjects.push(object)
                }
            })
            pageIndex ++
        }
        
       return outputObjects.slice(0,numOfResults)

    } catch (error) {
        handleError(error);
    }
};

const fetchIndividualObject = async (ID)=> {
    const object = await axios.get(`https://api.vam.ac.uk/v2/museumobject/${ID}`)
    return object.data.record
}

const fetchRandomObjects = async (num = 200) => {
    const imagedObjects = await fetchObjectsWithImages(num);

    // Fisher-Yates Shuffle
    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
        return arr;
    };

    const shuffledObjects = shuffleArray(imagedObjects);
    return shuffledObjects.slice(0, 9); // Pick first 9 elements
};


export default {fetchObjectsWithImages, fetchRandomObjects, fetchIndividualObject}

