import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { BarberShop } from "@prisma/client";
import Search from "./_components/search";

export default async function Home() {
  const barbershops = await db.barberShop.findMany({});
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">

        <h2 className="text-xl font-bold"> Olá, Guilherme!</h2>
        <p className="text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />

      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">agendamentos</h2>
        <BookingItem />
      </div>
      <div className="mt-6">
        <h2 className=" px-5 text-xs uppercase text-gray-400 font-bold mb-3">recomendados</h2>
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: BarberShop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="mt-6 mb-[4.5rem]">
        <h2 className=" px-5 text-xs uppercase text-gray-400 font-bold mb-3">populares</h2>
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: BarberShop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
