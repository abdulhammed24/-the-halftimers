import { shimmer, toBase64 } from "@/utils/imageUtils";
import Image from "next/image";
import Container from "./Container";
import hero from "../../public/images/pages_heroBg.png";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <section>
      <Container className="max-md:px-0">
        <div className="relative w-full overflow-hidden bg-foreground">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={hero}
              alt="hero-bg"
              fill
              className="-z-[1] object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div className="z-20 pb-12 pt-12 max-md:px-6 md:pb-28 md:pl-32">
            <p className="text-3xl font-bold italic text-primary-foreground lg:text-4xl">
              {title}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
