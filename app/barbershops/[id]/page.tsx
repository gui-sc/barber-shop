import { db } from "../../_lib/prisma";
import BarberShopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
interface BarbershopDetailsPageProps {
    params: {
        id?: string
    }
}
const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    
    if (!params.id) return (<h1>Barbershop not found</h1>)
    

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })
    if (!barbershop) return (<h1>Barbershop not found</h1>)
    return (
        <div>
            <BarberShopInfo barbershop={barbershop} />
            {barbershop.services.map(service => (
                <ServiceItem key={service.id} service={service} />
            ))}
        </div>
    );
}

export default BarbershopDetailsPage;