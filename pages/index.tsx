import type { NextPage } from "next";
import Timer from "../components/Timer";
import Socials from "../components/Socials";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-black text-center text-xs best">
        I Believe I Can Fly
      </h1>
      <div className="flex flex-col items-center justify-center text-center py-16 mx-4 my-12">
        <div className="">
          <h1 className="text-6xl font-semibold py-2 hero-t text-primary block">
            COMING SOON ...
          </h1>
          <p className="best font-light text-3xl py-2 flex items-center">
            The Best of Mine is yet to Shine.{" "}
            <Image src={"/vids/hourglass.gif"} height={70} width={70} />
          </p>
        </div>
        <div className="font-bold py-12 flex flex-col justify-center items-center">
          <h2 className="py-1 text-5xl heading text-blue-900 mb-8 flex flex-col">
            <div className="flex items-center text-5xl heading">
              Launching On My Birthday{" "}
            </div>
            <span className="text-xs mt-[-2px] block text-black italic">
              ~ programmed by my brother, designed by me
            </span>
          </h2>
          <Timer />
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Home;
