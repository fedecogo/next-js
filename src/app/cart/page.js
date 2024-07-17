'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart(){

    const pathName = usePathname();
    // anche usePathName non si puo usare lato server,è client component
    console.log(pathName);

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'), searchParams.get('randomvalue'));
    // ricerca parametro




    return <div>
        <h1>This is cart comoponent</h1>
    </div>
}