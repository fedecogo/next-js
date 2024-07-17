
async function fetchUserDetails(currentUserId){

    try{
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        return result
    } catch (e){
        throw new Error(e)

    }

}

export default async function UserDetails({params}){
    
    console.log(params);

    const userDetails = await fetchUserDetails(params.details);


    return <div>
        <h1>This is user details page</h1>
        <p>{userDetails?.age} anni tiene {userDetails.firstName}  eh ja</p>
    </div>
}