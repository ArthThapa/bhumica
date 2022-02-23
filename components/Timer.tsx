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
    <div className="">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1>{state.days} Days </h1>
          <h1>{state.minutes} Minutes </h1>
          <h1>{state.seconds}seconds</h1>
        </div>
        <div className="flex flex-col"></div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default Timer;
