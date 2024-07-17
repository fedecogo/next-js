
// fetch
async function fetchListOfUser(){

    try{

         const apiResponse = await fetch('https://dummyjson.com/users');
         const result = await apiResponse.json();
         return result.users

    } catch(error){
        throw new Error(error)
    }

}


export default async function ServerSideDataFetching(){

    const listOfUser = await fetchListOfUser()
    console.log(listOfUser);
    return (
        <div>
            <h1>Server side data fetching</h1>
            <ul>
                {listOfUser.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}