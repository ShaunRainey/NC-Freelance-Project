import metRequests from "../Utilities/metMuseumApi"
import { useState } from "react"
import { useEffect } from "react"

function FeaturedArtworks() {

    const [artworks, setArtworks] = useState([])

    const getArtworks = (count = 6) => { 
        return metRequests.getValidObjectNumbers()
            .then((validIDs) => {
                const randomIDs = [];
                while (randomIDs.length < count) {
                    const randomIndex = Math.floor(Math.random() * validIDs.length);
                    const randomID = validIDs[randomIndex]
                    randomIDs.push(randomID)
                }
                const artworkPromises = randomIDs.map((id) => { return metRequests.getObjectByID(id) })
                return Promise.all(artworkPromises)
            })
            }
    useEffect(() => { 
        getArtworks(6).then((response) => {
            setArtworks(response)
        })
    }, [])

    console.log(artworks)
    // need to filter the artworks so that they always have primaryImageSmall. Filter getValidIDs?
    return (
        <div>
            <ul>
                {artworks.map((artwork) => {
                    return (
                        <li>
                            
                            <img src={artwork[primaryImageSmall]} alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default FeaturedArtworks