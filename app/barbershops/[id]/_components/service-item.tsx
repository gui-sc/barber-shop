import { Service } from "@prisma/client";
import { Card, CardContent } from "../../../_components/ui/card";
import Image from "next/image";

interface ServiceItemProps {
    service: Service
}
const ServiceItem = ({ service }: ServiceItemProps) => {
    return (
        <Card>
            <CardContent>
                <div className="flex">
                    <div className="relative"></div>
                    <Image src={service.imageUrl} alt={service.name} fill className="w-full h-[200px] rounded-2xl" style={{
                        objectFit: 'cover'
                    }} />
                </div>
            </CardContent>
        </Card>
    );
}

export default ServiceItem;