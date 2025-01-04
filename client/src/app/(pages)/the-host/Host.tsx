import Container from "@/components/Container";
import { shimmer, toBase64 } from "@/utils/imageUtils";
import Image from "next/image";

const Host = () => {
  return (
    <section className="relative z-20 xl:-mt-[50px]">
      <Container width="large">
        <div className="bg-primary-foreground p-6 lg:p-10">
          <div className="mb-10">
            <p className="text-sm">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat dolore sit beatae tempora laudantium iusto quis
                  minima quisquam, nobis reprehenderit. Corporis rerum
                  consectetur ut laudantium adipisci facere accusantium nam non?
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
