import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="bg-white rounded-full shadow-[0_0_10px_0] shadow-primary/45 flex gap-2 sm:gap-4 items-center py-2 sm:py-4 px-6 sm:px-8 w-fit mb-8">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <p className="text-black text-[12px] sm:text-lg md:text-xl font-bold uppercase whitespace-nowrap">
          créer un site web <span className="underline">vraiment</span> unique
        </p>
      </div>
      <p className="[&>span]:text-primary text-3xl md:text-4xl lg:text-5xl max-w-lg lg:max-w-2xl text-center font-semibold mb-2">
        Votre <span>site</span> doit <span>donner envie</span> de{" "}
        <span>rester</span>, pas de{" "}
        <span className="line-through decoration-[3px] decoration-background">
          revenir
        </span>{" "}
        en{" "}
        <span className="line-through decoration-[3px] decoration-background">
          arrière
        </span>
        .
      </p>
      <div className="text-center max-w-lg text-gray-400 text-sm mb-8">
        <p> Design moderne, SEO solide, suivi complet:</p>
        <p>
          on construit un site qui retient vos visiteurs et vous apporte des
          résultats.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <Button variant="primary">
            <BiCalendar size={24} />
            Prendre RDV
          </Button>
          <Image
            src="/cta.png"
            alt="CTA"
            width={180}
            height={180}
            className="absolute -bottom-16 -left-12"
          />
        </div>

        <Button variant="secondary">
          <span className="hidden sm:inline">Découvrir</span>{" "}
          <span>
            <span className="uppercase sm:lowercase">n</span>os
          </span>{" "}
          projets
          <FaArrowDown size={16} />
        </Button>
      </div>
    </div>
  );
}
