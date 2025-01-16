import metRequests from "../Utilities/metMuseumApi"
import { useState } from "react"
import { useEffect } from "react"

function FeaturedArtworks() {

    const [artworkIDs, setArtworkIDs] = useState([])
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const getArtworksIDs = async () => {
            const imagedArtworks = await metRequests.getImagedArtworks()
            setArtworkIDs(imagedArtworks)
        }
        getArtworksIDs()
    }, [])

    useEffect(() => {
        if (artworkIDs.length !== 0) {
            const fetchArtworks = async () => {
                const artworkPromises = artworkIDs.map((ID) => {
                    return metRequests.getObjectByID(ID)
                    
                })
                const artworkData = await Promise.all(artworkPromises);
                
                setArtworks(artworkData);
            }
            fetchArtworks()
        }
    }, [artworkIDs]) 
    return (
        <div>
            <ul>
                {artworks.map((artwork) => {
                    { console.log("hello") }
                    return (
                    <li key={artwork["objectID"]}>
                      {artwork["primaryImageSmall"] && (
                        <img src={artwork["primaryImageSmall"]} alt="Artwork" />
                      )}
                    </li> 
                    )
                })} 
            </ul>
        </div>
    )
}


export default FeaturedArtworks