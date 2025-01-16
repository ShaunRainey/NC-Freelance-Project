import metRequests from "../Utilities/metMuseumApi"
import { useState } from "react"
import { useEffect } from "react"

// function FeaturedArtworks() {
//   const [artworks, setArtworks] = useState([]);

//   const getArtworks = (count = 6) => {
//     return metRequests.getValidObjectNumbers().then((validIDs) => {
//       const randomIDs = [];
//       while (randomIDs.length < count) {
//         const randomIndex = Math.floor(Math.random() * validIDs.length);
//         const randomID = validIDs[randomIndex];
//           metRequests.getObjectByID(randomID).then((artwork) => {
//               if (artwork[primaryImageSmall]) {
//                 randomIDs.push(randomID);
//               }
//           })
//           continue
//       }
//       const artworkPromises = randomIDs.map((id) => {
//         return metRequests.getObjectByID(id);
//       });
//       return Promise.all(artworkPromises);
//     });
//   };
//   useEffect(() => {
//     getArtworks(6).then((response) => {
//       setArtworks(response);
//     });
//   }, []);

//     console.log(artworks);

  // need to filter the artworks so that they always have primaryImageSmall. Filter getValidIDs?
//   return (
//       <div>
//           <p>Hello</p>
//       <ul>
//         {/* {artworks.map((artwork) => {
//           return (
//               <li>
//                   <p>hello</p>
//               <img src={artwork[primaryImageSmall]} alt="" />
//             </li>
//           ); */}
//         {/* })} */}
//       </ul>
//     </div>
//   );
// }


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
                const artworkPromises = artworkIDs.map((ID) => {metRequests.getObjectByID(ID)})
                const artworkData = await Promise.all(artworkPromises);
                setArtworks(artworkData);
            }
            fetchArtworks()
            console.log(artworks)
            console.log(artworkIDs)
        }
    }, [artworkIDs]) 
    
    return (
        <>
            <p>Hello</p>
        </>
    )
}


export default FeaturedArtworks