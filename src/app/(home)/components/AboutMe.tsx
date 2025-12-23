export default function AboutMe() {
  return (
    <section className="relative my-20">
      <div className="absolute bg-gradient-to-br from-blue-700/40 via-blue-50/90 to-blue-100/90 rounded-2xl -left-[15%] h-full w-[90%]" />
      <div className="container relative py-8">
        <h2 className="text-center font-bold text-blue-950 text-2xl">
          SOBRE MÍ
        </h2>
        <br />
        <br />
        <div className="bg-gray-100/80 shadow-xs shadow-red-800/40 rounded-2xl py-4 px-2 lg:py-10 lg:px-4 text-blue-950 grid grid-cols-1 lg:grid-cols-3 sm:gap-8">
          <div className="col-span-1 flex ">
            <img
              src="/tomi.jpeg"
              alt="tomi"
              className="rounded-2xl my-auto mx-auto max-w-60 lg:max-w-none sm:w-full"
            />
          </div>
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-center ">
            <p>
              <span className="font-semibold text-xl">“</span>Soy{" "}
              <strong>martillero y corredor público</strong>. Tengo 30 años y
              nací en Villa Allende. Mi historia en el rubro inmobiliario
              comenzó hace más de 5 años, cuando me recibí en la Institución
              Cervantes en el 2019. Para seguir creciendo como profesional, me
              especialicé como <strong>Perito Tasador</strong>, buscando siempre
              brindar un servicio más sólido y confiable.
              <br />
              <br />
              Hoy, soy un orgulloso miembro de <strong>REMAX</strong>, un grupo
              de profesionales que hacen que cada proceso sea más fácil y
              gratificante. Ahí encontré un <strong>gran equipo</strong>—staff,
              broker, martillero y agentes— y las herramientas necesarias para
              ayudar a aquellos que quieran comprar o vender su propiedad.
              <br />
              Esta dedicación rindió frutos desde el inicio: En mi{" "}
              <strong>primer año</strong>, obtuve el{" "}
              <strong>premio "Rookie"</strong> y el <strong>"Club100"</strong>,
              reconocimientos a mi alcance de ventas.
              <br />
              <br />
              Pero más allá de los logros, lo que realmente{" "}
              <strong>amo de mi profesión</strong> es la oportunidad de{" "}
              <strong>
                acompañar a las personas y ayudarlas a concretar sueños
              </strong>
              . Mi objetivo es seguir profesionalizándome cada día para ser el
              puente que una a las personas con su nuevo hogar.
              <span className="text-xl font-semibold">”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
