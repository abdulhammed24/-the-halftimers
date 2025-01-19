import Container from "@/components/Container";
import { shimmer, toBase64 } from "@/utils/imageUtils";
import Image from "next/image";

const Host = () => {
  return (
    <section className="relative z-20 xl:-mt-[50px]">
      <Container width="large">
        <div className="bg-primary-foreground p-6 lg:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-5">
              <div className="relative h-32 w-32 flex-shrink-0">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/abdul.jpeg"
                    alt="Abdulhammed"
                    layout="fill"
                    className="rounded-full object-cover"
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xl font-bold italic">Abdulhammed</p>
                <p className="text-sm text-gray-600">
                  I'm a software developer who believes in turning code into
                  stories. I spend my days (and often nights) weaving lines of
                  code into seamless, interactive experiences that shape the
                  digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Host;
