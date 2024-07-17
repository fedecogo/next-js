
import Link from "next/link";

// fetch
async function fetchListOfUser() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/quotes/random', { cache: 'force-cache' });
        
        
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }

       
        console.log(apiResponse);
        
        if (typeof apiResponse.json !== 'function') {
            throw new TypeError('apiResponse.json is not a function');
        }
        
        const result = await apiResponse.json();
        return result;

    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error(error.message);
    }
}

export default async function Quotes() {
    try {
        const listOfUser = await fetchListOfUser();
        console.log(listOfUser);
        const quota = listOfUser.quote;
        console.log(quota);
        return (
            <div>
                <h3>Frase del giorno</h3>
                <h1>{quota}</h1>
                
            </div>
        );
    } catch (error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
            </div>
        );
    }
}
