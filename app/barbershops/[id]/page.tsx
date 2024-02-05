import { db } from "../../_lib/prisma";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import BarberShopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
interface BarbershopDetailsPageProps {
    params: {
        id?: string
    }
}
const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    const data = await getServerSession(authOptions);
    
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
            <div className="px-5 flex flex-col gap-3 py-6">
                {barbershop.services.map(service => (
                    <ServiceItem key={service.id} barberShop={barbershop} service={service} isAuthenticaded={!!data?.user} />
                ))}
            </div>
        </div>
    );
}

export default BarbershopDetailsPage;