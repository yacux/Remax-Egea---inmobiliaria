import { configs } from "@/configs/site.config";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-gray-200 shadow-xl py-2 text-blue-950">
      <nav className="container flex items-center">
        <div className="mr-auto">
          <Link
            href="/"
            aria-label="Inicio"
            className="flex gap-8 lg:gap-12 items-center"
          >
            <Image
              src="/logo-remax-balloon.svg"
              alt="Logo Remax"
              width={57}
              height={57}
              className="w-12 lg:w-18"
            />
            <div className="flex flex-col text-center text-xs font-semibold">
              <h1 className="poppins text-lg lg:text-xl uppercase">
                Egea Tomás Agustín
              </h1>
              <p>Agente Inmboliario</p>
              <p>REMAX Mediterránea</p>
            </div>
          </Link>
        </div>
        <ul className="hidden lg:flex gap-8 lg:gap-12 items-center">
          {configs.navLinks.map((link) => {
            return (
              <li key={link.href} className="text-lg">
                <Link href={link.href} aria-label={link.label}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
