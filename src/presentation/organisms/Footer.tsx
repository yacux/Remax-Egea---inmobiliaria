import Image from "next/image";
import Link from "next/link";
import { Divider } from "@/presentation/atoms";
import { InstagramSolid } from "@/presentation/atoms/Instagram";
import { SharpWhatsapp } from "@/presentation/atoms/WhatsApp";
import { Facebook } from "@/presentation/atoms/Facebook";
import { Linkedin } from "@/presentation/atoms/Linkedin";
import { configs } from "@/configs/site.config";
import { ReactNode } from "react";

export function Footer() {
  return (
    <footer className="bg-blue-950 py-4 text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 text-center container">
        <div className="">
          <Link href="/" aria-label="Inicio" className="space-y-8">
            <Image
              src="/logo-remax-balloon.svg"
              alt="Logo Remax"
              width={70}
              height={70}
              className="mx-auto w-40"
            />
            <h2 className="text-xl uppercase font-fold">Egea Tomás Agustín</h2>
            <p className="text-sm font-semibold">
              MOISÉS OLARIAGA BUONO
              <br />
              CPI 6868
            </p>
          </Link>
        </div>
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">
            Redes
            <br />
            Sociales
          </h3>
          <br />
          <ul className="space-y-4">
            {socialMedia.map((element, index) => (
              <li key={index + element.name}>
                <Link href={element.link} className="flex gap-2 justify-center">
                  <div>{element.icon}</div>
                  <p>{element.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href="/contacto" aria-label="Contacto" className="space-y-8">
            <h3 className="text-xl font-semibold">Contactanos</h3>
          </Link>
        </div>
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">
            Propiedades
            <br />
            Destacadas
          </h3>
          <ul>{/* acá generar un array con las mejores props y mapear */}</ul>
        </div>
        <div className="col-span-full">
          <Divider className="w-full bg-blue-200/50 my-2" />
          <p className="flex justify-between text-xs text-blue-100">
            <span>-Inmobiliaria-</span>
            <Link href={configs.socialLinks.whatsapp}>549-351 7055475</Link>
            <span>-Desarrollado por @Yacux-</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

type socialMediaProps = {
  name: string;
  icon: ReactNode;
  link: string;
};

const socialMedia: socialMediaProps[] = [
  {
    name: "Instagram",
    icon: <InstagramSolid height={25} width={25} />,
    link: configs.socialLinks.instagram,
  },
  {
    name: "WhatsApp",
    icon: <SharpWhatsapp height={25} width={25} />,
    link: configs.socialLinks.whatsapp,
  },
  {
    name: "Facebook",
    icon: <Facebook height={25} width={25} className="" />,
    link: configs.socialLinks.facebook,
  },
];
