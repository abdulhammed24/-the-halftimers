import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Host from "./Host";

export const metadata: Metadata = {
  title: "The Host",
};

const TheHost = () => {
  return (
    <>
      <Hero title="The Host" />
      <Host />
    </>
  );
};

export default TheHost;
