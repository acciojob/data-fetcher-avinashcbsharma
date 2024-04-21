import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [isvissible, setIsvissible] = useState(true);
  const [apidata, setApidata] = useState([]);

  useEffect(()=>{
    const fetchdata = async () =>{
      try{
        let response = await axios.get('https://dummyjson.com/products');
        response = JSON.stringify(response.data);
        setIsvissible(false);
        setApidata(response);
        console.log("Fetched Data: ",response);

      }
      catch(error){
        console.log(error);
      }
    }
    fetchdata();
  },[])

  return (
    <div>
      { isvissible && <p>loading</p>}
      
      <div>
        <h4><u>OUTPUT</u></h4>
        {apidata}
      </div>    
    </div>
  );
};
