import React, { useState, useEffect } from "react";
import Journals from "../components/journals";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function Journalslist() {
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
  return (
    <>
      <div className="journals font-mont flex flex-col items-center my-8 mx-5 md:mt-12">
        <div className="text-2xl font-semibold md:text-4xl md:mb-4">
          Journal Section
        </div>
        {/* Filters */}
        {/* <div className="cat w-[100%] my-3">
          <ul className="flex text-xs justify-between items-center">
            <li className="active font-bold">Case Report</li>
            <li>Medicine</li>
            <li>Engineering</li>
          </ul>
        </div> */}
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 mt-6 min-h-full">
          <Journals journals={jnal} />
        </div>
        <Link to="/journals">
          <button className="md:mt-6 lg:mt-8 mt-4 duration-300 ease-in-out bg-[#7968ec] px-6 md:px-10 py-2.5 md:py-4  rounded-full text-white text-sm md:text-md font-semibold hover:bg-[#7D69F9] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
            More Journals
          </button>
        </Link>
      </div>
    </>
  );
}

export default Journalslist;
