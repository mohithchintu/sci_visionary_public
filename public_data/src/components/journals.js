import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { excerpt } from "../utility";
import { NavLink } from "react-router-dom";

const Journals = ({ journals }) => {
  //   const [loading, setLoading] = useState(true);
  const [jnal, setJnal] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "jnal"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setJnal(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const conv = (itm) => {
    let n = itm.replace(/\s+/g, '-');
    return n;
  }

  return (
    <>
      {jnal?.map((item) => (
        <NavLink to={`/journal/${conv(item.title)}/${item.id}`}>
          <div className="bg-[#fcfbff] border-[#e3e1f1] cursor-pointer duration-200 ease-in-out border border-2 rounded-lg shadow-md hover:shadow-[#dbd7f8] hover:shadow-lg p-2 md:p-4 md:rounded-r-2xl ">
            <div className="rounded-md md:rounded-lg md:h-48 h-28 flex justify-center items-center overflow-hidden">
              <img
                className="w-full h-full shrink-0"
                src={item.imgUrl}
                alt={item.title}
              />
            </div>
            <h2 className="hidden md:block font-semibold text-[0.7rem] lg:text-[0.9rem] md:text-[0.95rem] mt-2 md:text-lg md:pt-3">
              {excerpt(item.title, 32)}
              <span className="text-[#adadad] font-semibold italic">
                &nbsp;{item.ISSN_number}
              </span>
            </h2>
            <h2 className="md:hidden font-semibold text-[0.7rem] lg:text-[0.9rem] md:text-[0.95rem] mt-2 md:text-lg md:pt-3">
              {excerpt(item.title, 18)}
              <span className="text-[#adadad] font-semibold italic">
                &nbsp;{item.ISSN_number}
              </span>
            </h2>
            <p className="hidden md:block text-[0.6rem] lg:text-[0.7rem] md:font-medium mt-1 md:text-sm md:pt-1 md:pb-3">
              {/* Journal first para */}
              {excerpt(item.description, 90)}
            </p>
            <p className="md:hidden text-[0.6rem] lg:text-[0.7rem] md:font-medium mt-1 md:text-sm md:pt-1 md:pb-3">
              {/* Journal first para */}
              {excerpt(item.description, 40)}
            </p>
          </div>
        </NavLink>
      ))}
    </>
  )
}

export default Journals
