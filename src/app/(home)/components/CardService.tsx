import { Divider } from "@/presentation/atoms";

export type CardServiceProps = {
  title: string | React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
};

export default function CardService({
  title,
  description,
  icon,
}: CardServiceProps) {
  return (
    <article className="flex flex-col text-center items-center rounded-lg shadow-xl bg-white p-2 md:p-4">
      <div className="text-blue-800">{icon}</div>
      <br />
      <h3>{title}</h3>
      <br />
      <Divider className="bg-gradient-to-r from-transparent to-transparent via-red-500 !h-[1px]"></Divider>
      <br />
      <div>{description}</div>
    </article>
  );
}
/*
<section class="servicios-inmobiliarios" aria-labelledby="titulo-principal">
  <header>
    <h1 id="titulo-principal">NUESTROS SERVICIOS EXCLUSIVOS REMAX</h1>
    <p class="subtitulo">Con la garantía y experiencia de la red inmobiliaria más grande del mundo</p>
  </header>

  <article class="servicio" aria-labelledby="servicio-1-titulo">
    <h2 id="servicio-1-titulo">ENCONTRAMOS TU PROPIEDAD IDEAL</h2>
    <div class="servicio-contenido">
      <p>Si no ves en nuestro portafolio lo que buscas, nuestro equipo especializado en <strong>[tu zona de cobertura]</strong> utilizará tecnología avanzada y conocimiento de mercado para ubicar propiedades que cumplan con tus requerimientos exactos.</p>
      <a href="#contacto" class="boton boton-primario" aria-label="Contactarnos para encontrar tu propiedad ideal">CONTÁCTANOS</a>
    </div>
  </article>

  <article class="servicio" aria-labelledby="servicio-2-titulo">
    <h2 id="servicio-2-titulo">INFORMACIÓN OPORTUNA</h2>
    <div class="servicio-contenido">
      <p>Nuestro boletín exclusivo te mantiene informado antes que nadie sobre:</p>
      <ul>
        <li>Nuevas propiedades en el mercado</li>
        <li>Oportunidades de inversión</li>
        <li>Tendencias del mercado en <strong>[tu ciudad/región]</strong></li>
      </ul>
      <button class="boton boton-secundario" aria-label="Suscribirse al boletín informativo">SUSCRÍBETE AHORA</button>
    </div>
  </article>

  <article class="servicio" aria-labelledby="servicio-3-titulo">
    <h2 id="servicio-3-titulo">GESTIÓN INTEGRAL</h2>
    <div class="servicio-contenido">
      <p>Simplificamos cada paso del proceso con:</p>
      <ol>
        <li>Asesoría profesional personalizada</li>
        <li>Trámites legales y financieros</li>
        <li>Soporte post-venta</li>
      </ol>
      <a href="#contacto" class="boton boton-primario" aria-label="Hablar con un asesor sobre gestión inmobiliaria">HABLEMOS</a>
    </div>
  </article>

  <aside class="asistencia" aria-label="Asistencia inmediata">
    <p>¿En qué puedo ayudarte hoy?</p>
    <!-- Widget de chat aquí -->
  </aside>
</section>*/
