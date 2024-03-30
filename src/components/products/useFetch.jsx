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
        setData(result);
        setLoading(false);
        setErr(null);
    }
    catch(e){
        setErr(e);
        setLoading(false)
    }
  }
  useEffect(()=>{
    fetchData();
  },[url]);

  return {data,loading,err}
}

export default useFetch;
