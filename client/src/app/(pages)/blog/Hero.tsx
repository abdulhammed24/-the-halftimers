import { shimmer, toBase64 } from "@/utils/imageUtils";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto lg:w-[calc(100%-80px-80px)] lg:min-w-[980px]">
        <div className="relative w-full overflow-hidden bg-foreground">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/c22c23_03ff7327b14c4b5a9d0fd84f3ad13f99~mv2_d_3008_1703_s_2.png/v1/fill/w_1339,h_457,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_03ff7327b14c4b5a9d0fd84f3ad13f99~mv2_d_3008_1703_s_2.png"
              alt="podcast"
              fill
              className="-z-[1] object-cover"
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
          <div className="pb-28 pl-32 pt-12">
            <p className="text-3xl font-bold italic text-primary-foreground lg:text-4xl">
              Blog
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
