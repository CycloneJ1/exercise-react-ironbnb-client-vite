import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


function CreateApartment() {

    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState("");
    
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newApartment = {
            img: imageURL,
            title: title,
            pricePerDay: price
        }
        console.log(newApartment)

        axios.post(`${import.meta.env.VITE_API_URL}/apartments`, newApartment)
            .then((response) => {
                navigate("/apartments");
            })
            .catch(() =>{
                console.log("error creating")
            })

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        text="text"
                        name="title"
                        required={true}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>
                <label>
                    Image:
                    <input
                        text="text"
                        name="imageURL"
                        required={true}
                        value={imageURL}
                        onChange={(e) => { setImageURL(e.target.value) }}
                    />
                </label>
                <label>
                    Price:
                    <input
                        text="text"
                        name="price"
                        required={true}
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </>
    )
}
export default CreateApartment