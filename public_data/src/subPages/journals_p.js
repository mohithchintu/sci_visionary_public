import React, { useState, useEffect } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Journals from "../components/journals";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const JournalsPage = () => {

  //   const [loading, setLoading] = useState(true);
  const [jnal, setJnal] = useState([]);
  // const [search, setSearch] = useState("");

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

  // const searchJnal=(e)=>{
  //   e.preventDefault();
  //   setJnal(jnal.filter((jnal)=>
  //   jnal.title.toLowerCase().includes(search.toLowerCase())||
  //   jnal.description.toLowerCase().includes(search.toLowerCase())
  //   ));
  // };
  //   console.log("jnal", jnal);

  return (
    <>
      <Navbar />
      <div className="xl:container">
        <div className="xl:container mx-5 journals font-mont my-8 md:mt-12">
          {/* <div className="flex justify-between">
            <span className="text-2xl items-start font-semibold md:text-4xl md:mb-4 ">
              Journals Section
            </span> */}
          {/* <div>
            <form onSubmit={(e)=>{searchJnal(e)}} className="md:flex md:space-x-3 hidden">
              <input onChange={(e)=>{
                setSearch(e.target.value)
              }} className="border rounded-md px-2 py-1" placeholder="Enter Journal name"/>
              <button type="submit">Search</button>
            </form>
            <form onSubmit={(e)=>{searchJnal(e)}} className="flex space-x-2 md:hidden text-cs">
              <input onChange={(e)=>{
                setSearch(e.target.value)
              }} className="border rounded-md text-sm px-2 py-1" placeholder="Search Here..."/>
              <button type="submit">&rarr;</button>
            </form>
          </div> */}
        </div>
        {/* Filters */}
        {/* <div className="cat w-[100%] my-3">
            <ul className="flex text-xs justify-between items-center">
              <li className="active font-bold">Case Report</li>
              <li>Medicine</li>
              <li>Engineering</li>
            </ul>
          </div> */}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 md:gap-3 lg:gap-4 mt-6">
          <Journals journals={jnal} />
          {/* /////// */}


          {/* </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default JournalsPage;
