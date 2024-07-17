import Link from "next/link";

// fetch
async function fetchListOfUser() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/users', { cache: 'force-cache' });
        
        // Check if response is OK (status 200-299)
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }

        // Log the response to check its content
        console.log(apiResponse);
        
        // Check if apiResponse.json is a function
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

export default async function ServerSideDataFetching() {
    try {
        const listOfUser = await fetchListOfUser();
        // console.log(listOfUser);
        return (
            <div>
                <h1>Server side data fetching</h1>
                <ul>
                    {listOfUser.users.map(user => ( // Assuming API response has a 'users' field
                        <li key={user.id} className="mt-3 cursor-pointer text-bold">
                            <Link href={`/server-data-fetch/${user.id}`}> {user.firstName} {user.lastName} - {user.email} </Link>
                        </li>
                    ))}
                </ul>
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
