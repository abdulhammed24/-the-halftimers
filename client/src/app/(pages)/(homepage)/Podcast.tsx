import Container from "@/components/Container";
import { shimmer, toBase64 } from "@/utils/imageUtils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Podcast = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="relative bg-foreground">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/c22c23_03ff7327b14c4b5a9d0fd84f3ad13f99~mv2_d_3008_1703_s_2.png/v1/fill/w_1339,h_457,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_03ff7327b14c4b5a9d0fd84f3ad13f99~mv2_d_3008_1703_s_2.png"
              alt="podcast"
              fill
              className="-z-[1] object-cover"
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="grid px-6 py-10 lg:grid-cols-2 lg:px-[120px]">
            <div className="grid gap-10">
              <div className="lg:w-[300px]">
                <h2 className="text-3xl font-bold italic text-primary-foreground">
                  The Halftimers Podcast
                </h2>
              </div>
              <div className="w-[200px]">
                <p className="text-sm text-primary-foreground">
                  Listen to the latest episode & subscribe to all
                </p>
              </div>

              <button className="flex h-10 w-fit items-center border border-primary-foreground px-5">
                <span className="text-sm text-primary-foreground">
                  Listen Now
                </span>
                <div>
                  <ChevronRight className="text-primary-foreground" />
                </div>
              </button>

              <div className="text-sm text-primary-foreground">
                <p>Subscribe to our podcast via:</p>
                <p className="underline">
                  iTunes , Stitcher , Google Podcast , Spotify
                </p>
              </div>
            </div>
            <div className="relative hidden lg:flex">
              <div className="absolute flex min-h-[350px] w-[400px] items-center justify-center border border-primary-foreground bg-primary p-5 text-center">
                <p className="text-center text-5xl font-bold italic text-primary-foreground">
                  The Halftimers Podcast
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </Container>
    </section>
  );
};

export default Podcast;
