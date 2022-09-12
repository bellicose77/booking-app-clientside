import {useEffect, useState} from 'react'

const useFetch = (url)=>{
const [data,setData] = useState([]);
const [loading,setLoading] = useState(false);
const [error,setError] = useState(false);
useEffect(()=>{
   const fetchData = async () =>{
      setLoading(true)
      try{

      }catch(err){

      }
   }
},[url])

}
export default useFetch;