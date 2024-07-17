import { redirect } from "next/navigation";

 export default function Accounts(){

   const userProfileInfo = null;

   if(userProfileInfo === null) redirect('cart?search=product1&randomvalue=abcde')

    return <h1>ciao dalla pagina account</h1>
 }