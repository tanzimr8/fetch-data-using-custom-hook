import React, { useEffect, useState } from 'react'

const useFetch = (url,options={}) => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState('');

  const fetchData = async()=>{
    setLoading(true);
    try{
        const response = await fetch(url,{...options});
        if(!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        console.log(result);
        (result.products && result.products.length) ? setData(result) : null ;
        
    }
    catch(e){
        setErr(e);
        setLoading(false)
    }
    
  }
  useEffect(()=>{
    fetchData();
  },[url]);
}

export default useFetch;
