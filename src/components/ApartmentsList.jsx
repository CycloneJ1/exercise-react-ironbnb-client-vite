import { useEffect, useState } from "react";
// import { useParams} from "react-router-dom";
import axios from "axios";

    
function ApartmentsList(props) {
    <h1>List of Apartments</h1>

    const [apartmentList, setApartmentList] = useState([])

    const API_URL = "https://ironbnb-m3.herokuapp.com";

    useEffect(()=>{
        axios.get(API_URL + "/apartments")
        .then( response => {
            console.log("receiving", response.data)
            setApartmentList(response.data)
        })
        .catch(e => {
            console.log("error fetching data",e)
        })
    },[])

    return(   
        <>
        {apartmentList.map((greatApt) => {
            return(
                <section>
               <p>{greatApt.title}</p>
               <p><img src={greatApt.img} alt="imageURL" /></p>
               <p>{greatApt.price}</p>

               </section>
            )
        })}
        </>
    )
}

  
//     const { apartmentId } = useParams();
//     const [foundApartment, setFoundApartment] = useState(null);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`${API_URL}/apartments/${apartmentId}`);
//           setFoundApartment(response.data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };
  
//       fetchData();
//     }, [apartmentId]);
  
//     if (!foundApartment) {
//       return (
//         <div className="container text-center">
//           <p style={{ fontSize: "24px", fontWeight: "bold" }}>Apartment Details</p>
//           <br />
//           <p style={{ fontSize: "18px" }}>Loading...</p>
//         </div>
//       );
//     }
  
//     return (
//       <div className="container">
//         <h1>Apartment Details</h1>
//         <p>Apartment Name: {foundApartment.name}</p>
//         <p>Apartment Location: {foundApartment.location}</p>
//       </div>
//     );
//   }
  
  export default ApartmentsList;