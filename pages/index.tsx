import type { NextPage } from "next";
import Timer from "../components/Timer";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-between text-center py-16">
      <Image src={"/images/logo.png"} height={100} width={200} />
      <div className="py-10">
        <h1 className="text-6xl font-semibold py-2 hero-t text-primary">
          COMING SOON .. .
        </h1>
        <p className="best font-bold text-4xl py-2">
          The Best of Mine is yet to Shine. ⏳
        </p>
      </div>
      <div className="font-bold py-12 flex flex-col justify-center items-center">
        <h2 className="py-2 text-5xl heading text-pastelBlue">
          Launching On My Birthday 😄 <br />
          <span className="text-xs mt-[-2px] block text-black">
            ~ programmed by my brother, designed by me
          </span>
        </h2>
        <Timer />
      </div>
    </div>
  );
};

export default Home;
