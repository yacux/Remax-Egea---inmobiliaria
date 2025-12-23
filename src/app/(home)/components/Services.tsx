import CardService, { CardServiceProps } from "./CardService";
import { Home, Bell, Handshake } from "lucide-react";

type ServiceType = CardServiceProps & {
  id: number; // le agrego un id al tipado para usarlo en el map.
};

export default function Services() {
  const servicesData: ServiceType[] = [
    {
      id: 1,
      title: (
        <>
          ENCONTRAMOS TU <br /> PROPIEDAD IDEAL
        </>
      ),
      description: (
        <p className="">
          Nuestro equipo especializado en{" "}
          <strong>Córdoba, en Zona Norte/Sur</strong> combina
          <strong> tecnología avanzada</strong> con{" "}
          <strong>conocimiento local</strong> para identificar propiedades que
          superen tus expectativas. Búsquedas en base a tus necesidades de
          espacio, ubicación, presupuesto y estilo de vida!
        </p>
      ),
      icon: <Home className="w-12 h-12 mx-auto" />,
    },
    {
      id: 2,
      title: (
        <>
          INFORMACIÓN
          <br />
          OPORTUNA
        </>
      ),
      description: (
        <>
          <p className="font-medium mb-3">Recibe antes que nadie:</p>
          <ul className="space-y-2 text-left">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Nuevas propiedades <strong>en primicia</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Ofertas <strong>exclusivas</strong> para clientes VIP
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Reportes mensuales del <strong>mercado local</strong>
              </span>
            </li>
          </ul>
        </>
      ),
      icon: <Bell className="w-12 h-12 mx-auto" />, // o <BellRing />
    },
    {
      id: 3,
      title: "ACOMPAÑAMIENTO PERSONALIZADO",
      description: (
        <>
          <p className="font-medium mb-3">Te apoyamos en cada paso:</p>
          <ul className="space-y-2 text-left">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Seguimiento constante</strong> hasta firmar tu escritura
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Asesoría <strong>100% adaptada</strong> a tus necesidades
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Soporte 24/7</strong> para resolver tus dudas
              </span>
            </li>
          </ul>
        </>
      ),
      icon: <Handshake className="w-12 h-12 mx-auto" />, // Ajusté a w-12/h-12 para consistencia
    },
  ];

  return (
    <section className="bg-gray-100 py-10 my-20 text-blue-950">
      <div className="container text-center">
        <h2 id="servicios-titulo" className="text-xl lg:text-3xl font-bold">
          NUESTROS SERVICIOS EXCLUSIVOS REMAX
        </h2>
        <br />
        <p className="lg:text-lg font-semibold">
          Con la garantía y experiencia de la red inmobiliaria más grande del
          mundo
        </p>
        <br />
      </div>
      <div className="container grid grid-cols-1 text-center gap-10 md:grid-cols-3 text-sm sm:text-base">
        {servicesData.map((serv, index) => {
          return (
            <CardService
              key={serv.id}
              title={serv.title}
              description={serv.description}
              icon={serv.icon}
            />
          );
        })}
      </div>
    </section>
  );
}
