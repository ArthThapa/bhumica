import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex flex-col items-start py-14">
      <h1>I'll be here soon. Till then, you can reach me here:</h1>
      <div className="flex justify-center  items-center text-xs py-4">
        <Image src="/icons/discord.svg" height={25} width={25} />
        <a
          className="ml-2 hover:text-yellow-500"
          href="https://discord.gg"
          target={"_blank"}
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
// bday timestamp -> 1651190400000
// rn -> 1645693736471
export default Socials;
