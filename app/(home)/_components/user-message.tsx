"use client"

import { useSession } from "next-auth/react";

const UserMessage = () => {
    const { data } = useSession();
    return ( 
        <h2 className="text-xl font-bold capitalize"> Olá{data?.user ? `, ${data.user.name?.toLowerCase()?.split(" ")[0]}` : ""}!</h2>
     );
}
 
export default UserMessage;