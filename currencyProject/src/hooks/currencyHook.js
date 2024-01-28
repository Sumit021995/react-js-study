import { useEffect , useState } from 'react'

function useCurrencyHook (currency) {
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then(()=>{})

    },[])
    return [currency , setCurrency]
}