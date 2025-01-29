import axios from "axios";
import handleError from "./handleError.js";

const vamMuseum = axios.create({ baseURL: "https://api.vam.ac.uk/v2/objects/search" })


const fetchObjectsWithImages = async () => {
    console.log("Hello")
    try {
        const response = await vamMuseum.get("", {
            params: {q: "", images_exist:1, page: 1, page_size: 100 }});
            let results = response.data.records
            results.forEach(element => {
                console.log(element["_primaryImageId"])
            });
       return response.data.records

    } catch (error) {
        handleError(error);
    }
};

fetchObjectsWithImages()






// export default {fetchObjectsWithImages}

