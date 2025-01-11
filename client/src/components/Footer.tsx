import Link from "next/link";
import { BiMusic } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-foreground py-20">
      <Container>
        <div className="grid gap-10">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold italic text-primary lg:text-5xl"
            >
              The Halftimers
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="flex size-7 items-center justify-center rounded-full bg-primary-foreground text-foreground"
            >
              <FaFacebookF size={16} />
            </Link>
            <Link
              href="#"
              className="flex size-7 items-center justify-center rounded-full bg-primary-foreground text-foreground"
            >
              <BsTwitterX size={16} />
            </Link>{" "}
            <Link
              href="#"
              className="flex size-7 items-center justify-center rounded-full bg-primary-foreground text-foreground"
            >
              <FaSpotify size={16} />
            </Link>{" "}
            <Link
              href="#"
              className="flex size-7 items-center justify-center rounded-full bg-primary-foreground text-foreground"
            >
              <BiMusic size={16} />
            </Link>
          </div>
          <div>
            <p className="text-sm text-primary-foreground">
              © 2035 by The Halftimers
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
