import React, { useEffect, useState } from "react";

const Timer = () => {
  const [state, setState] = useState<any>({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
    time_up: "",
  });

  const deadLine = Number(process.env.NEXT_PUBLIC_DEADLINE);
  let x: any;
  useEffect(() => {
    const x = setInterval(count, 1000);
  }, []);
  const count = () => {
    const now = new Date().getTime();
    console.log(now);
    const t = deadLine - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    setState({ days, hours, minutes, seconds });

    if (t < 0) {
      clearInterval(x);
      setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "ITS TIME",
      });
    }
  };

  return (
    <div className="items-center bg-blue-900 rounded-md  py-2 px-2 w-3/4 text-xl tracking-wider opacity-90">
      <h1 className="heading text-3xl mb-4 text-white">29 March 2022</h1>
      <div className="timer grid grid-cols-7 gap-0 items-center font-semibold">
        <div className="flex flex-col bg-white rounded-md px-2 py-3">
          <h1>{state.days}</h1>
        </div>
        <div className="text-white">:</div>
        <div className="flex flex-col  bg-white rounded-md px-2 py-3">
          <h1>{state.hours}</h1>
        </div>
        <div className="text-white">:</div>
        <div className="flex flex-col  bg-white rounded-md px-2 py-3">
          <h1>{state.minutes}</h1>
        </div>
        <div className="text-white">:</div>
        <div className="flex flex-col  bg-white rounded-md px-2 py-3">
          <h1>{state.seconds}</h1>
        </div>
        <h5 className="text-white font-thin">Days</h5>
        <h5></h5>
        <h5 className="text-white font-thin">Hrs.</h5>
        <h5></h5>
        <h5 className="text-white font-thin">Mins.</h5>
        <h5></h5>
        <h5 className="text-white font-thin">Sec.</h5>
      </div>
    </div>
  );
};

export default Timer;
