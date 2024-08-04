import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
// import Footer from "./footer";
// import Navbar from "./navbar";
import { excerpt } from "../utility";
import { NavLink } from "react-router-dom";

const EB = (arr) => {
  const [eb, setEb] = useState([]);
  const a = arr.eb;
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "eb"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          const k = { id: doc.id, ...doc.data() };
          const n = k.ebname;
          if (a.includes(n)) {
            list.push(k);
          }
        });
        setEb(list);
      },
      (error) => {
        // console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [a]);
  return (
    <>
      <div className="md:grid-cols-2 grid md:gap-3 grid-cols-1 gap-4 mt-4 md:mt-10">
        {eb?.map((item) => (
          //   <NavLink to={`/eb/${conv(item.name)}/${item.id}`}>
          // <NavLink to={`/eb`}>
          < div className="bg-[#F8F6FF] py-4 flex flex-col md:grid md:grid-cols-4 border-[#f4f3fc] duration-200 ease-in-out border border-2 rounded-lg w-full shadow-sm shadow-grey-400 hover:shadow-[#dbd7f8] hover:shadow-lg pl-2 md:pl-4 md:rounded-r-2xl justify-center items-center" >
            <div className="md:h-[8rem] md:w-[8rem] h-[6rem] w-[6rem] rounded-full bg-red-200 overflow-hidden">
              <img
                className="shrink-0 w-full h-full"
                src={item.ebimgUrl}
                alt={item.ebname}
              />
            </div>
            <div className="flex flex-col col-span-3 space-y-2 text-center md:text-start">
              <div className="flex flex-col mt-2">
                <span className="hidden md:block font-semibold text-xs lg:text-base md:text-sm">
                  {item.ebname}
                </span>
                <span className="md:hidden font-semibold text-base">
                  {item.ebname}
                </span>
                <span className="hidden md:block font-semibold italic text-[0.7rem] lg:text-[0.9rem] md:text-[0.95rem] text-gray-500">
                  {item.ebfield}
                </span>
                <span className="md:hidden font-semibold text-[0.7rem] italic lg:text-[1.4rem] md:text-[0.95rem] text-gray-500">
                  {item.ebfield}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="hidden md:block text-[0.6rem] lg:text-[0.7rem] md:font-medium md:text-sm">
                  <span className="font-bold text-gray-500"> Research Interest: </span>{item.ebdescription}
                </p>
                <p className="md:hidden text-xs mt-1">
                  <span className="font-bold text-gray-500"> Research Interest: </span>{item.ebdescription}
                </p>
                <p className="hidden md:block text-[0.6rem] lg:text-[0.7rem] md:font-medium md:text-sm">
                  <span className="font-bold text-gray-500"> Country: </span>{item.ebcountry}
                </p>
                <p className="md:hidden text-xs mt-1">
                  <span className="font-bold text-gray-500"> Country: </span>{item.ebcountry}
                </p>
                <p className="hidden md:block text-[0.6rem] lg:text-[0.7rem] md:font-medium md:text-sm">
                  <span className="font-bold text-gray-500"> Email: </span>{item.ebcontact}
                </p>
                <p className="md:hidden text-xs mt-1">
                  <span className="font-bold text-gray-500"> Email: </span>{item.ebcontact}
                </p>
              </div>
            </div>
          </div>
          // </NavLink >
        ))}
      </div >
    </>
  )
}

export default EB;
