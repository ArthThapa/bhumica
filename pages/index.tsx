import type { NextPage } from "next";
import Timer from "../components/Timer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center text-center">
      <div className="py-6">
        <h1 className="text-2xl font-semibold py-2">COMING SOON</h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          voluptatibus laborum illum iste itaque cupiditate inventore
          repudiandae corrupti molestias perspiciatis quos temporibus earum
          error nihil voluptates quia eveniet, dolor unde nesciunt! Illum, sit
          facilis!
        </p>
      </div>
      <div className="py-6">Logo</div>
      <div className="font-bold py-6">
        <h2 className="py-2">
          Launching on my birthday 😄 ~ programmed by my brother Arth, designed
          by me
        </h2>
        <h2>29 March</h2>
        <Timer />
      </div>
    </div>
  );
};

export default Home;
