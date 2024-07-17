'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";


// hoke useRouter -> next/navigation

export default function Home() {

      const router = useRouter()
      // a quanto pare si puo usare solo lato client non server
      console.log(router)

      function handleNavigate (){
        router.push('products')
      }
      function handleNavigate2 (){
        router.push('quotes')
      }


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>First project on NextJs</h1>
      <hr className="customHr" /> 
      <Link href="/products">Navigate to product page</Link>
      <Link href="/accounts">Navigate to accounts page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRouter</h2>
      <button onClick={handleNavigate}>Naviga con UseRouter</button>
    
      <h2 className="font-bold mt-3 text-lg">Un po di frasi random</h2>
      <button onClick={handleNavigate2}>Naviga con UseRouter</button>
    
    </main>
  );
}