"use client"

import { useEffect, useState } from "react";
import useSWR from "swr";
// funzione fetcher per gestire le richieste di rete
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientSideDataFetch(){

       // uso di SWR per la fetch dei dati
        const { data, error, isLoading } = useSWR("https://dummyjson.com/users", fetcher)


        // const [loading, setLoading] = useState(false);
        // const [user , setUser ] = useState([]);

        // async function fetchListOfUser (){
        //     try{
        //         setLoading(true)
        //         const apiResponse = await fetch(`https://dummyjson.com/users`);
        //         const result = await apiResponse.json();

        //         if (result?.users){
        //                 setUser(result.users);
        //                 setLoading(false)
        //         }

        //     } catch(errror){
        //         console.log(errror);
        //         setLoading(false)

        //     }
        // }

        // useEffect(()=>{
        //     fetchListOfUser()
        // },[])


    if(error){
        return <h1>error</h1>

    }
    if(isLoading) return <h3 className="font-bold">loading</h3>

    return(
    
        <div>
            <ul>
                {data && data.users && data.users.length > 0
                    ? data.users.map((user) => (
                        <li key={user.id} className="mt-3 cursor-pointer text-bold">
                            {user.firstName} {user.lastName} - {user.email}
                        </li>
                      ))
                    : null}
            </ul>
        </div>
    )
}