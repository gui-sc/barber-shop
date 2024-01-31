import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src="/vercel.svg" alt="" width={80} height={120} />
                <Button variant="outline" size="icon">
                    <MenuIcon size={14}/> 
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;