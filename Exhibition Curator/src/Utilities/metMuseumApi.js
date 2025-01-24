import axios from 'axios';
import handleError from './handleError.js'

// https://collectionapi.metmuseum.org/public/collection/v1/objects

// 54 is a non existent ID

// 25422 is an interesting example, 35 is a highlight

const metMuseum = axios.create({ baseURL: "https://collectionapi.metmuseum.org/public/collection/v1" })

const getValidObjectNumbers = () => {
    // returns an array of numbers
    return metMuseum
      .get("/search?q=isHighlight")
      .then((response) => {
        return response.data.objectIDs;
      })
      .catch(handleError);
}

const getTotalObjectNumbers = () => {
    // returns a single number
    return metMuseum.get("/objects")
        .then((response) => {
            return response.data.total;
        })
        .catch(handleError);
};

const getObjectByID = (objectID) => {
    // returns an object
    return metMuseum.get(`/objects/${objectID}`)
        .then((response) => {
            return response.data
        })
        .catch(handleError);
}

const getDepartments = () => {
    // returns an array of objects
    return metMuseum.get("/departments")
        .then((response) => {
            return response.data.departments;
        })
        .catch(handleError);
}

const getAllImagedArtworks = async (count = 9) => {
  const validIDs = await getValidObjectNumbers();
  const artworks = [];
  let index = 0;

  while (artworks.length < count) {
    try {
      const artwork = await getObjectByID(validIDs[index]);
      index +=1;
      
      if (artwork && artwork.primaryImageSmall) {
        artworks.push(artwork["objectID"]);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error(`Artwork with ID ${validIDs[index]} not found (404).`);
      } else {
        console.error(`Error fetching artwork with ID ${validIDs[index]}:`, error);
      }
    }
    }
  return artworks
};

const getRandomImagedArtworks = async (count = 9) => {
  const validIDs = await getValidObjectNumbers();
  const randomIDs = []
  

  while (randomIDs.length < count) {
    const randomIndex = Math.floor(Math.random() * validIDs.length);
    const randomID = validIDs[randomIndex];

    try {
      const artwork = await getObjectByID(randomID);

      if (artwork && artwork.primaryImageSmall) {
        randomIDs.push(randomID);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error(`Artwork with ID ${randomID} not found (404).`);
      } else {
        console.error(`Error fetching artwork with ID ${randomID}:`, error);
      }
    }
    }
  return randomIDs
};



export default {
  getValidObjectNumbers,
  getTotalObjectNumbers,
  getObjectByID,
  getRandomImagedArtworks,
  getDepartments,
  getAllImagedArtworks
};



	767421, 573446, 193506, 340855, 26627;