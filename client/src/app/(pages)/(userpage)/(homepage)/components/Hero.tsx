import Container from "@/components/Container";
import hero from "../../../../../../public/images/hero.jpg";

import Image from "next/image";
const Hero = () => {
  return (
    <section>
      <Container className="relative max-md:max-w-full max-md:px-0">
        <div className="relative z-0 h-[400px] w-full overflow-hidden lg:h-[600px]">
          <Image
            src={hero}
            alt="hero"
            fill
            className="object-cover"
            placeholder="blur"
            priority
          />

          <div className="absolute z-10 flex w-full flex-col items-center justify-center py-40 text-center">
            <h1 className="text-4xl font-bold italic text-primary-foreground lg:text-8xl">
              The <br />
              Halftimers
            </h1>

            <div className="relative h-12 w-full">
              <div className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 transform lg:w-96">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="21.6 89.18 156.7 20.42"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="21.6 89.18 156.7 20.42"
                  data-type="color"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      fill="#EA5A00"
                      d="M154.9 107.8h2.1c-.3.2-.7.1-1.1.2 0 .1-.1.2-.1.3h-.4c0-.1-.1-.2-.1-.3h-.1c-.2.2-.4.3-.7.6 0-.2 0-.3.1-.3 0-.2.1-.4.3-.5zm13.1-.4c-.2.2-.5.3-.7.5v.1c.3-.1.6-.2 1-.3-.1-.2-.2-.2-.3-.3zm1.5-.5s0 .1.1.1.3 0 .5-.1l-.2-.2c-.2.1-.3.2-.4.2zm-15.3 1.2l.1.1c.1 0 0-.1-.1-.1.1 0 .1 0 0 0zm-31.5 1.5h.3c0-.1-.1-.1-.1-.2l-.2.2zm55.6-10.4v.5h-.5l-.3-.3c-.2 0-.4-.1-.5 0-.3.2-.6.2-1 0-.1-.1-.3 0-.4 0l-.1.1c.1.1.1.3.2.4.1-.1.1-.1.2-.1.4.2.8.4 1.1.6v.2h.3v.3c-.2-.1-.3-.2-.4-.3l.1-.1c-.2.1-.3-.1-.5-.2-.1-.1-.2-.1-.4-.1l.3.3c-.2.1-.6 0-.7.3 0 .1 0 .1.1.2l.2-.2c.1.1.1.1.2.1.1-.1.1-.1.2-.1l.1.1c-.2.2-.4.5-.6.7h.3v-.1h.3v.1c-.1 0-.2 0-.3.1.2.2.4.5.5.7-.2.3-.4.5-.5.8-.3.1-.7.2-1 .3v.3c-.4.1-.8.3-1.1.4-.3-.2-.7-.1-1.1-.1l.3.3.2-.2c.1.1.2.3.3.4-.3.1-.4.4-.5.4-.4-.1-.5.3-.7.4-.5-.1-.8-.4-1.2-.5-.1.6.7.4.7.9-.3.2-.6.5-.9.7-.4-.1-.4-.1-.7 0-.1-.2-.2-.5-.4-.8l-.8.8s-.1-.1-.2-.1c0 .2-.5 0-.4.4-.2.1-.4.2-.7.3.1-.2.1-.3.2-.4-.3 0-.5-.1-.8-.1-.3 0-.6.1-1 .2.3.1.5.1.6.1.1.2.1.3.2.4-.3.1-.5-.1-.7-.3 0 0-.1 0-.3-.1v.7h-.5c.1-.2.1-.3.1-.5h-.4c-.2-.2-.3-.4-.4-.6.2-.1.5-.3.7-.2.2.2.4-.2.5-.1.6.4 1-.1 1.5-.2-.2-.1-.4-.3-.5-.4l.2-.2-.2-.2-.2.2c0-.1-.1-.2-.1-.4h-.4c.1.3.2.5.4.8-.4.1-.6 0-.7-.3.1-.1.1-.2.2-.2-.3-.1-.5-.2-.8-.2-.2.1-.4.2-.5.2.1.3.3.3.5.3l.1.1c-.1.2-.2.3-.2.5-.3-.2-.5-.4-.6-.5-.1.2-.3.3-.4.4-.3.1-.6-.3-.9 0-.3-.2-.6-.2-.9-.2-.3 0-.6-.1-.9.1-.1-.1-.3-.1-.4-.2 0-.2-.1-.3-.1-.6-.1.3-.1.5-.1.6-.3.1-.6.1-.9.2-.1-.1-.1-.2-.2-.2l.2-.2c-.2-.1-.3-.1-.4-.2-.2.2-.3.6-.8.7-.3-.2-.5-.3-.8-.6-.2.2-.4.5-.6.7h-.7v-.7l-.4.4c-.2-.1-.4-.1-.6-.2.2.2.3.3.5.6-.3-.1-.4-.2-.6-.3-.2.2-.6.1-.8.2-.3 0-.6.1-.9.2-.1 0-.1-.1-.2-.1s-.3-.1-.4 0c-.2.2-.4.1-.6.1-.2 0-.5.1-.7.1-.6-.3-1.2 0-1.8-.2 0 0-.1 0-.1.1-.1-.1-.2-.2-.2-.4-.2.2-.3.4-.5.6-.1-.1-.2-.2-.3-.2-.1.1-.2.1-.2.2-.1-.1-.3-.1-.4-.2-.4.3-.9.1-1.2.2-.2-.2-.4-.3-.7-.5.1.3.1.4.2.5-.5.3-1.1.1-1.7.1v-.5c-.4.3-.9.5-1.3.5h-.9c-.3 0-.6.1-.8 0-.3-.2-.5.1-.8 0h-.4c-.3-.3-.5 0-.8 0-.1-.1-.2-.1-.3-.2-.3.1-.5.2-.8.3-.3-.4-.6 0-.9 0 0-.1-.1-.2-.1-.4l-.9.3c-.2-.1-.4-.2-.5-.3-.3.1-.4.1-.6.1h-1.7c-.3 0-.6.2-.7.1-.4-.3-.6.1-.8.1-.2 0-.5.1-.7.2h-.8s-.1 0-.2.1c.8.2 1.6.3 2.4.2.9-.1 1.7.2 2.5-.1.2.1.4.1.5.1h3.6c.2 0 .3-.1.5-.1h2.3c.1 0 .3.1.4.1.4-.3.8-.1 1.2-.2.2 0 .3-.1.5-.2.4.2.8.1 1.4-.2.5.3.8.5 1 .3.2-.2.5-.1.7-.1.3 0 .5-.1.8-.1.1 0 .2.1.3.1.8 0 1.7 0 2.5-.2.3-.1.7-.1 1-.1.3 0 .7-.1 1-.2.4 0 .8.1 1.2.1.7.1 1.5 0 2.2-.2.3-.1.7-.1 1 0 .2.1.4 0 .7 0 .4.3.9 0 1.3.1s.8-.5 1.2-.1l.6-.3c.3.3.6.2.8 0 .1.1.3.2.4.2.1-.1.2-.2.3-.2.1.1.2.1.3.2h.9c0 .1 0 .2-.1.3-.1-.1-.2-.1-.3-.2-.3.2-.5.7-1 .6 0 .2-.1.3-.1.5h-.5l-.1.1s0-.1-.1-.1h-.3v-.1c.1 0 .2 0 .3-.1l.2.2-.2-.2c0-.4.4 0 .5-.3-.3-.1-.6-.2-.9-.2l-.3.3c-.2-.2-.5-.2-.5-.5l-.3.3c-.3-.1-.7-.2-1-.3-.3.3-.7.1-1.2.2-.1.4-.5.6-.8.8-.2-.1-.3-.1-.5-.2.2-.1.3-.1.5-.2-1.2-.1-2.2-.1-3.1-.2-.4.2-.6.3-.9.4 0 .1 0 .3-.1.5-.2-.1-.4-.1-.6-.2-.1 0-.2.1-.5.1.1-.2.2-.4.3-.5l-.2-.2c-1-.2-2 .1-3 .1-.1 0-.1.1-.2.1-.7.1-1.5.4-2.2-.1-.2.2-.5.3-.8.5h1.2c-.2.2-.3.3-.4.5-.1 0-.3-.2-.4-.1-.3.2-.5 0-.7 0-.3-.1-.5-.2-.8-.2-.1 0-.3-.1-.4-.2 0 0 0-.1-.1-.1 0 0 0 .1.1.1v.5s-.1 0-.1.1c0-.1-.1-.2-.2-.4 0 0 0-.1.1-.2-.1-.1-.3-.1-.4-.2 0 .1-.1.2-.1.4h-.5c0-.1-.1-.2-.2-.3l-.2.2c-.3-.4-.7-.2-1.1-.2.1.3.2.4.2.7-.3-.1-.5-.2-.6-.5 0-.1-.2-.1-.4-.3.1.3.1.5.2.7-.2-.1-.3-.1-.4-.2-.1.2-.1.3-.2.5-.1-.2-.2-.3-.3-.5-.4.2-.9-.2-1.3.2-.4-.4-.6-.1-1 .3.1-.4.1-.6.2-.9-.6.3-1.1.7-1.8.7.2-.4.5-.5.9-.6-.4-.1-.7-.1-1 .1-.5-.3-1.1-.1-1.6-.2l-.3.3.2.2c-.2.1-.4.1-.6.2-.2-.1-.4-.1-.5-.2-.1-.2-.2-.3-.3-.4-.2 0-.4.1-.5.1h-2.9l-.1.1v.2c.5-.1.8-.1 1.3 0-.6.2-1.2.1-1.8.4h-.3c-.3-.3-.6-.2-.9-.1-.5.1-.9.3-1.3 0-.6.4-1.3 0-1.9.2-.1-.2-.2-.4-.4-.6-.1 0-.1.1-.2.1l.3.3c-.5 0-1 0-1.4.3-.3 0-.6.1-.7 0-.3-.2-.5.1-.7 0-.4-.1-.8-.1-1.3-.2v-.1l.2-.2c-.1-.1-.3-.1-.5-.2-.1.1-.2.2-.3.4 0 0 0-.1-.1-.1-.3.1-.7.3-1 .4-.7.1-1.3.1-2 .2l-.3-.3-.2.2c-.3-.1-.6-.2-.8-.3-.3 0-.4.1-.6.1 0-.1-.1-.2-.1-.3l-.1-.1c-.3.2-.5.2-.9.2h-1.9v.1h1.5v.1h-1.7c-.1-.1-.2-.2-.2-.3H111c.1.2.5.1.4.4-.4-.1-.8-.1-1.2-.2-.2-.1-.3-.2-.5-.3-.1.2-.1.3-.2.3-.7-.1-1.3-.1-2-.2 0 .1 0 .2-.1.3h-.9c-.3 0-.5.1-.8-.1-.2-.2-.6.1-.9-.2 0-.1-.3 0-.4.1-.4.2-.8.1-1.2-.1l-.6.3c-.1-.1-.3-.1-.4-.2-.2 0-.4-.1-.6-.1-.4.3-1-.1-1.5.3 0-.4-.4-.6-.2-1 .2-.1.3-.2.5-.2.2.2.5.3.8.5 0-.1.1-.2.1-.3.4-.1.9.1 1.3-.2l.3.3h.4c.1-.1.1-.2.2-.2.2 0 .4.1.5.1.2 0 .3-.1.5-.1.1 0 .2.1.4.1l.2-.2c.3 0 .6.1.8.1.2 0 .5.1.7.1.2 0 .4.1.7.1h.8c.3 0 .5.1.8.1.1 0 .3-.1.5-.1h1.4c.6 0 1.2.1 1.8 0 .6-.1 1.1.3 1.6.1.5.3.8 0 1.2-.2.4.4.6.4.7.2-.1-.1-.2-.1-.4-.2.9-.3 1.8-.3 2.6-.1.4-.1.9-.2 1.4-.3.2 0 .5.2.6.1.2-.1.4-.1.6-.1.5 0 .9-.2 1.4.1.3-.3.8-.1 1.1-.2.3-.1.5.2.8 0 .2-.1.6 0 .8-.2.7.1 1.4-.1 2.1.2l.1-.1c.1 0 .2-.1.3-.1l-.3-.3c-.2 0-.5-.1-.7.1-.2.2-.5.1-.7.1-.2 0-.4-.3-.7-.1-.2.2-.4 0-.7-.1-.1.1-.2.1-.3.2-.1-.1-.2-.2-.3-.2-.2 0-.5.1-.7.2-.3.1-.5-.2-.7-.1-.2.1-.4 0-.6 0-.4 0-.8.2-1.2.2-.4 0-.7.1-1.1.1-.5-.1-1 .1-1.5-.2h-.2c-.2.3-.5.2-.8.1-.7 0-1.4-.1-2-.2-1.2-.1-2.3.1-3.5.2h-1.8c-.2 0-.5.1-.7-.1-.6 0-1.2-.1-1.7.2l-.1-.1c-.7-.1-1.5-.1-2.2 0-.4.1-.8.1-1.1 0-.4-.1-.7-.1-1 .1-.2-.1-.3-.2-.5-.3l-.1.1c0 .1-.1.2-.1.3h-.3c-.2-.1-.5-.3-.7 0-.2-.1-.5-.3-.7 0-.1.1-.3-.1-.4-.1-.5-.1-.9-.2-1.3.1-.4-.1-.7-.1-1.1-.2-.1.1-.2.3-.3.4-.3-.1-.5-.2-.8-.2-.2 0-.4.1-.7.1 0-.1 0-.1-.1-.2h-.5c0 .1-.1.2-.2.3-.4-.4-.9 0-1.2-.4-.3.4-.8-.1-1 .3l-.3-.3c-.8-.1-1.6 0-2.2.2-.6 0-1.1-.5-1.5-.1l-.9-.3c-.1.1-.1.2-.2.4-.2 0-.5.1-.7-.2-.2.3-.4-.1-.6 0-.2 0-.4.3-.6.1-.2.3-.4-.2-.6-.1-.2.1-.5 0-.8 0-.2 0-.5.1-.6.1-.2 0-.5-.2-.6-.1-.3.2-.4-.2-.7-.1-.2.1-.5.1-.8.2h-.1c-.2-.2-.5-.2-.8-.1-.2.1-.5 0-.7 0-.1 0-.3-.1-.4-.1-.2 0-.4.2-.5.1-.2 0-.4-.1-.6-.1h-2.6c-.2 0-.3.1-.5.1-.4.1-.8.1-1.1.2-.3.1-.5-.4-.7-.1-.2-.1-.5-.2-.7-.2h-.4c-.1.2-.1.2-.1.3l-.9-.3c-.3.3-.7.2-.9.1-.5-.2-1.1-.1-1.6-.1h-1.1c-.2 0-.4-.2-.5-.1-.4.3-.9.1-1.3.1h-4.1c-.3 0-.5.1-.8.1 0 0-.1-.1-.2-.1.1.5.2.5 1.7.5.1.1.1.2.2.3h.9c-.2-.1-.3-.2-.4-.2.4 0 .8-.3 1.1.1.3-.3.7-.2 1.1 0 .3.1.7.1 1.1.2 0-.2-.2-.2-.1-.3.8 0 1.6-.1 2.4.4.1-.1.2-.2.3-.4h.4c.1.1.1.2.1.4.1-.2.1-.3.1-.4.1.1.2.1.3.2.1-.1.1-.1.2-.1h1.6c.1 0 .3.1.4.1.4-.3.9-.1 1.3-.2.5 0 1 .1 1.5.1 1.3.1 2.7 0 4 0l.4-.4c.2.2.3.4.4.5.3.1.4.1.5.2.2 0 .3-.1.4-.1.1 0 .2-.1.3-.2.3.2.7.3 1 .1.3-.2.6-.1.8.1.1.1.3.1.4.2l.6-.3c.6.1 1 .2 1.5.3 0-.1.1-.2.1-.3h.6c.1.3.2.5.2.7-.3.1-.5.2-.6.2-.4 0-.6-.1-.9-.1-.2 0-.5-.1-.8-.1 0 0-.1-.1-.2-.3l-.5.5c-.4 0-.7-.4-1 0-.4 0-.7-.1-1.2-.1-.4.3-1.1-.1-1.5.2-.6-.1-1.1-.2-1.7-.3-.1 0-.1.1-.2.1l-1.2-.3-.3.3c-.2-.1-.4-.2-.7-.3-.1.1-.1.2-.2.4-.3-.1-.7-.1-1-.2-.2 0-.3.2-.6 0-.1-.1-.4 0-.7 0-.1 0-.2-.1-.2-.1-.7.1-.6.1-1.4-.1-.4-.1-.9-.2-1.2.1l-1.2-.3-.3.3c-.1-.1-.2-.1-.3-.2-.1.1-.2.2-.3.2-.2-.1-.4-.1-.6-.2h-2.4c-.4 0-.8.1-1.1-.1-.4-.2-.7.1-1.1.1h-.4c-.7-.2-1.1-.2-2 0-.3.1-.7.1-1-.1-.1-.1-.3-.1-.4-.1-.2.3-.5.1-.8.2-.8 0-1.5 0-2.3-.1-1.3-.2-2.6.1-3.8-.2-.2-.1-.5 0-.8 0H51c-.2 0-.5-.2-.7-.1-.3.1-.4 0-.6 0-1.2.1-2.3-.3-3.5-.2-.5 0-1-.3-1.5-.2h-.1c-.6-.3-1.3-.3-2-.3h-9.5c-.2-.2-.3-.5-.4-.6-.4-.1-.8-.3-1.2-.4-.1.1-.2.3-.2.3-1.4.2-2.5-.2-3.5-1h-1.4c-.2 0-.4.3-.6.1-.3-.2-.5-.1-.8-.1h-1.1c-.5-.6-1.2-.9-1.5-1.6-.3-.1-.5-.3-.8-.4v-1.1c.2-.1.3-.2.5-.3-.1-.3-.1-.6-.2-1 .3-.3.5-.7.8-1.1.1-.3.1-.6.2-.9-.1-.1-.2-.1-.3-.2.2-.3.4-.6.7-.9v-1.2c0-.2.1-.3.1-.5-.1-.5-.1-.5.4-.7.2-.1.4-.2.7-.2-.1-.3.5-.2.4-.5-.3-.2-.6-.4-1-.2-.1.1-.2.2-.4.3.1-.4.2-.6.2-.9.3-.4.5-.7.7-1 .2-.5.5-.7.8-1 .2 0 .4-.1.5-.2.7-.1 1.3-.1 2-.2.4 0 .8-.1 1.2-.2h1.4c.1 0 .2 0 .2-.1.3-.3.5.1.7.1.5-.2 1.2-.2 1.7 0 .2-.3.5-.2.7-.1.2.2.5.1.7.1 1.2-.1 2.4.2 3.6-.1.3-.1.6.1.9.1h1.9c.6 0 1.2.3 1.8.2h1.2c.4 0 .8.1 1.1-.1.4-.1.8-.1 1.2-.1h5.7c1.9 0 3.7.1 5.6-.1.9-.1 1.8 0 2.7 0h2.7c.9 0 1.8-.2 2.6-.2h24.9c.2 0 .3-.1.4-.2.4.3.8.3 1.2.1.2-.1.4-.1.5 0 .2 0 .4-.1.6-.1h2.3c.8 0 1.5-.2 2.3.1.6-.3 1.3-.1 1.9-.2.2 0 .4-.1.6-.2.1.2.3.2.5.1.4-.2.8-.2 1.1 0 .4 0 .6-.1.9-.1h4.5c1.5 0 3 .1 4.5-.1s2.9.1 4.4-.2c.7-.1 1.5 0 2.3 0 .2 0 .4.1.5 0 .3-.2.6-.1.9-.2.3 0 .6-.2.9-.2h5.7c1.9 0 3.7.2 5.6-.2h.8c.3 0 .6-.1.7 0 .3.2.5-.2.6 0 .2.3.4-.1.6 0 .1 0 .3 0 .4.1.3.2.5 0 .7-.1.1 0 .1.1.2.1.7 0 1.5.2 2.2-.1.1 0 .3-.1.4 0 .2.2.5.1.7.1h1.9c.6 0 1.2.1 1.8-.2l.1.1c.3 0 .7-.1 1-.1h3.3c1.1-.1 2.2.2 3.3.2.2 0 .5.1.7 0 .3-.2.4 0 .6 0 1.1 0 2.3-.1 3.4.2.4.1.9-.2 1.3-.2s.9-.1 1.3.1.9-.1 1.3.2c.7.1 1.5.1 2.2.2h.7c.4.1.8.3 1.1.3.8 0 1.6.3 2.4.4.3 0 .7 0 1 .2.8.3 1.6.5 2.3.9.5.3 1 .7 1.6.9.8.2 1.3.7 1.9 1.1l.9.6c.6.4 1.4.5 1.9 1.2h.7c.1.3.2.4.4.5.6.1 1 .6 1.4 1 .3.3.4.6.5 1 .1 1.2.2 1.2.2 1.2zm-145 7.9l-.2-.2c.1.1.2.1.2.2zm1.3 0c0-.1-.1-.1-.1-.2-.1.1 0 .2.1.2zm7.1.1h.4-.4c0 .1.1.1.1.2-.1-.1-.1-.2-.1-.2zm86.6.3l.1.1c.1 0 .1 0 .2-.1-.1 0-.1.1-.2.1 0-.1-.1-.1-.1-.1zm-.7-.1zm.3.3l-.3-.3c.1.2.2.2.3.3zm1.1 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm1-.2zm9.4.6s.1 0 .1-.1l-.1.1zm7.8-1.4zm.2-.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0zm14.3-.6h-.2.2zm-.2.1h.2-.2zm1.7-.8v-.1h-.6v.1h.6zm2.4-.5c-.1.1-.2.1-.3.2 0 0-.1 0-.1.1.1.1.2.1.3.1h.1v-.4zm1.1.3c0-.1-.1-.2-.2-.4v.2c.1.2.1.2.2.2zm3.3-.3l.1.1h.3v-.4s0 .1-.1.1c-.2.1-.3.2-.3.2zm-1.6-1.2c.2.2.3.3.5.4 0-.2 0-.2.1-.4h-.6zm.4 2.7s-.1 0 0 0c-.1 0-.1 0 0 0h-.2c-.1 0-.2.1-.3.3h.2c.1 0 .2 0 .3-.1-.1 0-.1-.1 0-.2zm.5-.8l-.9-.6-.3.6h-.3c-.2 0-.3 0-.5-.1.1.2.2.4.3.5h.6c.6 0 .8 0 1-.3l.1-.1c-.1.1-.1.1 0 0 0 .1 0 0 0 0zm1.4-.1c-.1-.1-.3-.1-.4-.2 0 0-.1 0-.1-.1l-.2.2c-.2.2-.3.3-.4.5.1.1.1.1.2.1h.1l.1-.1.1-.1.1.1h.2c.2-.3.3-.3.3-.4zm.2-1.5c-.1 0-.1-.1-.2-.1s-.1-.1-.2-.1v.2h.4zm.4 2c.2.1.3.2.4.2v-.1c-.1-.2-.1-.2-.4-.1zm.1-2c.2 0 .5-.1.7-.1h.2v-.1l-.1-.1-.1-.1c-.2.1-.3.2-.5.3-.1-.1-.1 0-.2.1 0-.1 0-.1 0 0zm1 .7h-.5s-.1.1-.1.2h.6v-.2c0 .2 0 .1 0 0 0 .1 0 .1 0 0zm.8.2h-.2.2zm1.7-1c-.1 0-.1 0 0 0-.1.1-.1.1-.1.2h.1v-.2zm.2-.6c0-.1 0-.2-.1-.3v.3h.1zm.8-.3h.3v-.1s-.2 0-.3.1c0-.1 0-.1 0 0zM99 108.5c0 .1.1.3.2.5-.4.1-.6.1-.9-.1-.1.1-.2.1-.2.2-.1-.1-.2-.1-.3-.2-.1.1-.2.1-.3.2-.3-.1-.5-.2-.8-.3 0 .1-.1.2-.2.3-.3-.1-.6-.3-.9-.1-.2.1-.6-.1-.8 0-.3.2-.6-.1-.8.3-.3-.3-.6-.1-.9-.2-.2-.1-.4 0-.5 0-.2 0-.3-.1-.5-.1-.1 0-.3.1-.5.1-.2-.1-.5-.2-.7-.3-.3.1-.6.5-1.1.1-.1.1-.2.3-.2.3h-1.3c0-.1-.1-.2-.1-.3-.3.2-.6.1-.8.1-.2-.2-.3-.3-.5-.4.1-.1.1-.3.2-.4h1.5c.5 0 .9-.1 1.4-.2 0 .1.1.2.1.4.1-.1.2-.1.3-.2h2.8c.2 0 .5.1.7-.1h.2c.4.2.8.1 1.2.2h1.2l.3.3c.1-.2.2-.3.3-.5.4 0 .7.5 1.2.2 0-.1.4.1.7.2zm-6.1-.1h-2.7l.1.1s-.1-.1 2.6-.1zm39 .2c.3.1.5.2.6.2.3-.1.5-.1.8-.2-.4 0-.8-.1-1.4 0zm3.9 0c.1.1.1.2.2.4.2-.5 0-.4-.2-.4zm-.7 0v.1c.1 0 .2 0 .3-.1v-.1c-.1.1-.2.1-.3.1zm-14.7.5c.1-.1.1-.1.1-.2h-.1v.2z"
                      data-color="1"
                    ></path>
                  </g>
                </svg>
              </div>

              <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform">
                <p className="text-sm font-bold text-primary-foreground lg:text-2xl">
                  Sports Blog & Podcast
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
