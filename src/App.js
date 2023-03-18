import "./index.css"
import "./App.css"
import Home from "./pages/Home"
import Card from "./pages/Card";
import { db } from './Firebase' 
import { useEffect, useState } from "react";
// import products from "./assets/products.json"
// import Product from "./components/Product";

export default function App() {
  const [ posts, setPosts] =  useState([])

  useEffect(()=>{
    db.collection('houseInfo').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc =>({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, [])
  
  return (
    <div className="app">
      <Home />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
            posts.map(post => (
              <Card key={post.id} imageUrl={post.post.imageUrl} 
              numberOfRooms={post.post.numberOfRooms} area={post.post.area}
               address={post.post.address} price={post.post.price}
                type={post.post.type} />
            ))
        }
      </div>
    </div>
  );
}
