"use client";
import Image from "next/image";
import { Button } from "../../../_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";
import SideMenu from "../../../_components/side-menu";
import { SheetTrigger, SheetContent, Sheet } from "../../../_components/ui/sheet";

interface BarbershopInfoProps {
    barbershop: Barbershop
}

const BarberShopInfo = ({barbershop}: BarbershopInfoProps) => {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    }
    return ( 
        <div>
            <div className="h-[250px] w-full relative">
                <Button onClick={handleBackClick} size={"icon"} variant={"outline"} className="z-50 top-4 left-4 absolute" >
                    <ChevronLeftIcon />
                </Button>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="z-50 absolute top-4 right-4">
                            <MenuIcon size={14} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>
                <Image src={barbershop.imageUrl} fill alt={barbershop.name}
                    className="opacity-75" style={{ objectFit: 'cover' }} />
            </div>
            <div>
                <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
                    <h1 className="text-xl font-bold ">{barbershop.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <MapPinIcon size={18} className="text-primary" />
                        <p className="text-sm">{barbershop.address}</p>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                        <StarIcon size={18} className="text-primary" />
                        <p className="text-sm">5,0 (900 avaliações)</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BarberShopInfo;