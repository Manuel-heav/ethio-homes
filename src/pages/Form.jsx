import React, { useState } from 'react'
import "../App.css"
import "../index.css"
import { db, storage } from '../Firebase'
import {
        ref,
        uploadBytesResumable,
        getDownloadURL 
    } from "firebase/storage";
import {useStateValue} from '../components/StateProvider'
import Taskbar from './Taskbar';
const Form = () => {

    const [{ user }, dispatch] = useStateValue();
    const [address, setAddress] = useState("")
    const [type, setType] = useState("")
    // const [image, setImage] = useState(null)
    const [image, setImage] = useState("")

    const [numberOfRooms, setNumberOfRooms] = useState(0);
    const [area, setArea] = useState(0);
    const [price, setPrice] = useState(0);
    const [posts, setPosts] = useState([]);
    const [progress, setProgress] = useState(0)

    const handleChange = (e) => {
        // if (e.target.value[0]) {
            setImage(e.target.files[0])
        // }
    }
    console.log(image)
    const handleUpload =  () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes * 100)
                );
                setProgress(progress);
            },
            (err) => {
                console.log(err);
                alert(err)
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("houseInfo").add({
                            address: address,
                            imageUrl: url,
                            type: type,
                            numberOfRooms: numberOfRooms,
                            area: area,
                            price: price,
                            username: user.displayName,
                            profileurl: user.photoURL,
                        });
                    })
            }

        )
    }


    return (
        <div className="home">
                  <Taskbar />
            <form class="w-full max-w-lg px-8 mt-10">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Address
                        </label>
                        <input value={address} onChange={e => setAddress(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Address" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Type
                        </label>
                        <input value={type} onChange={e => setType(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Type" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Number Of Rooms
                        </label>
                        <input value={numberOfRooms} onChange={e => setNumberOfRooms(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Number Of Rooms" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Area Of Land
                        </label>
                        <input value={area} onChange={e => setArea(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Area of land in square meters" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Price
                        </label>
                        <input value={price} onChange={e => setPrice(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="Number" placeholder="Estimated Price" />
                    </div>
                </div>
                <form class="flex items-center space-x-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Upload Image Here
                    </label>
                    <label class="block">
                        <span class="sr-only">Choose profile photo</span>

                    </label>
                    
 <input onChange={handleChange} type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4 mb-5 mt-5
       file:rounded-full file:border-0
       file:text-sm file:font-semibold
       file:bg-violet-50 file:text-violet-700
       hover:file:bg-violet-100
     "/><span className="text-sky-400/100 ">{image != null ? (progress === 100 ? "Done" : progress + "%") : ""}</span>
                </form>

                <button onClick={handleUpload} class="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    POST
                </button>
            </form>
        </div>
    )
}

export default Form

