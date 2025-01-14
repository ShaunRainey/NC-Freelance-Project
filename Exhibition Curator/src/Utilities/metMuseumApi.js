import axios from 'axios';
import handleError from './handleError.js'

// https://collectionapi.metmuseum.org/public/collection/v1/objects

// 54 is a non existent ID

// 25422 is an interesting example, 35 is a highlight

const metMuseum = axios.create({ baseURL: "https://collectionapi.metmuseum.org/" })

const getValidObjectNumbers = () => {
    // returns an array of numbers
    return metMuseum.get("/public/collection/v1/objects")
        .then((response) => {
            return response.data.objectIDs
        })
        .catch(handleError)
}

const getTotalObjectNumbers = () => {
    // returns a single number
    return metMuseum.get("/public/collection/v1/objects")
        .then((response) => {
            return response.data.total;
        })
        .catch(handleError);
};

const getObjectByID = (objectID) => {
    return metMuseum.get(`/public/collection/v1/objects/${objectID}`)
        .then((response) => {
            return response.data
        })
        .catch(handleError);
}

for (let i = 1; i < 50; i++){
    getObjectByID(i).then((response) => {
        // console.log(response.isHighlight)
        if(response.isHighlight === true){console.log(response)}
    })
}