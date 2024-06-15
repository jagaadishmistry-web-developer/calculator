import { useState } from "react";

const Display = () => {
  const [da1, setDa1] = useState(0);
  const [da2, setDa2] = useState(0);
  const [res, setRes] = useState(0);

  const gtData = (ram) => {
    let demoo1 = parseInt(da1);
    let demoo2 = parseInt(da2);

    switch (ram) {
      case "plus":
        setRes(demoo1 + demoo2);
        break;
      case "minus":
        setRes(demoo1 - demoo2);
        break;
      case "multi":
        setRes(demoo1 * demoo2);
        break;
      case "divided":
        setRes(demoo1 / demoo2);
        break;
      case "clear":
        setRes(0);
        setDa1(0);
        setDa2(0);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="bg-slate-100/10 backdrop-blur border-2 px-6 py-6">
          <div className="grid gap-6">
            <div className="text-3xl font-serif rounded-md font-extrabold text-center py-5 bg-slate-500 text-white">
              New Web Calculatar
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-4">
              <input
                onChange={(e) => setDa1(e.target.value)}
                value={da1}
                className="col-span-2 px-1 py-1 text-lg bg-slate-200 rounded-md hover:scale-105 duration-500"
                placeholder="Enter Number"
                type="number"
              />
              <input
                onChange={(e) => setDa2(e.target.value)}
                value={da2}
                className="col-span-2 px-1 py-1 text-lg bg-slate-200 rounded-md hover:scale-105 duration-500"
                placeholder="Enter Number"
                type="number"
              />
              <input
                value={res}
                className="col-span-4 px-1 py-1 text-lg bg-slate-200 font-bold rounded-md"
                disabled
                placeholder="Result"
                type="text"
              />
              <button
                onClick={() => {
                  gtData("plus");
                }}
                className="col-span-1 lg:px-12 px-6 py-3 bg-slate-400 text-white hover:bg-green-600 font-extrabold text-xl hover:scale-110 duration-500 rounded-md">
                +
              </button>
              <button
                onClick={() => {
                  gtData("minus");
                }}
                className="col-span-1 lg:px-12 px-6 py-3 bg-slate-400 text-white hover:bg-green-600 font-extrabold text-2xl hover:scale-110 duration-500 rounded-md">
                -
              </button>
              <button
                onClick={() => {
                  gtData("multi");
                }}
                className="col-span-1 lg:px-12 px-6 py-3 bg-slate-400 text-white hover:bg-green-600 font-extrabold text-base hover:scale-110 duration-500 rounded-md">
                x
              </button>
              <button
                onClick={() => {
                  gtData("divided");
                }}
                className="col-span-1 lg:px-12 px-6 py-3 bg-slate-400 text-white hover:bg-green-600 font-extrabold text-base hover:scale-110 duration-500 rounded-md">
                /
              </button>
              <button
                onClick={() => {
                  gtData("clear");
                }}
                className="col-span-4 px-12 py-3 bg-slate-500 text-xl text-white rounded-md hover:scale-105 duration-500 hover:bg-red-500 font-serif font-extrabold">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
