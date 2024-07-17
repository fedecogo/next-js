"use client"

import { useEffect, useState } from "react"


export default function ClientSideDataFetch(){

        const [loading, setLoading] = useState(false);
        const [user , setUser ] = useState([]);

        async function fetchListOfUser (){
            try{
                setLoading(true)
                const apiResponse = await fetch(`https://dummyjson.com/users`);
                const result = await apiResponse.json();

                if (result?.users){
                        setUser(result.users);
                        setLoading(false)
                }

            } catch(errror){
                console.log(errror);
                setLoading(false)

            }
        }

        useEffect(()=>{
            fetchListOfUser()
        },[])
    if(loading) return <h3 className="font-bold">loading</h3>

    return <div>
           <ul>
                    {user.map(user => ( 
                        <li key={user.id} className="mt-3 cursor-pointer text-bold">
                         {user.firstName} {user.lastName} - {user.email} 
                        </li>
                    ))}
                </ul>
    </div>
}