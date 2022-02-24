import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex flex-col items-start pt-6 text-left">
      <h1>I&apos;ll be here soon. Till then, you can reach me at:</h1>
      <div className="flex justify-center  items-center text-xs py-4">
        <Image src="/icons/discord.svg" height={25} width={25} />
        <a
          className="ml-2 hover:text-yellow-500"
          href="https://discord.gg"
          target={"_blank"}
          rel="noreferrer"
        >
          Bhumica#8374
        </a>
      </div>
      <div className="flex justify-center  items-center text-xs">
        <Image src="/icons/email.svg" height={25} width={25} />
        <a
          href="mailto:mail@bhumica.com"
          className="ml-2 hover:text-yellow-500"
        >
          mail@bhumica.com
        </a>
      </div>
    </div>
  );
};
export default Socials;
