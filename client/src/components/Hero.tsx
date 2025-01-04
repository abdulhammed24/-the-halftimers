import { shimmer, toBase64 } from "@/utils/imageUtils";
import Image from "next/image";
import Container from "./Container";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <section>
      <Container>
        <div className="relative w-full overflow-hidden bg-foreground">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/c22c23_198d3d91eb9f452ba01e164086abf6b1~mv2_d_3008_1703_s_2.png/v1/fill/w_1189,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_198d3d91eb9f452ba01e164086abf6b1~mv2_d_3008_1703_s_2.png"
              alt="hero-bg"
              fill
              className="-z-[1] object-cover"
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
          <div className="pb-12 pt-12 max-md:px-6 md:pb-28 md:pl-32">
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
