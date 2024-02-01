"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src="/vercel.svg" alt="" width={80} height={120} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon size={14} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SheetHeader className="text-left border-b border-solid border-secondary p-5">
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </CardContent>
        </Card>
    );
}

export default Header;