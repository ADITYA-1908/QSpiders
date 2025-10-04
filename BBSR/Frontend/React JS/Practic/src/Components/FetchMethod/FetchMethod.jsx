import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchMethod = () => {
  const [userData, setUserData] = useState([]);

  // const fetchDAta=()=>{
  //   const result=fetch("https://fakestoreapi.com/products")
  //   result.then((data)=>{
  //     const res=data.json()
  //     res.then((finalresult)=>{
  //         setUserData(finalresult)
  //     })
  //   }).catch((error)=>{
  //     console.log(error);

  //   })
  // }

  //! async await

  // const fetchDAta=async()=>{
  //     const data= await fetch("https://fakestoreapi.com/products")
  //     const res=await data.json()
  //     console.log(res);

  // }

  //! axios with async and await

  const fetchDAta = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setUserData(data);
  };

  console.log(fetchDAta);
  useEffect(() => {
    fetchDAta();
  }, []);
  console.log(userData);

  return <div></div>;
};

export default FetchMethod;
