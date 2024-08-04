import React, { useState } from "react";
import Navbar from './navbar';
import Footer from './footer';

function Contact() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    query: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value })
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, query, } = user;

    if ((name && email && phone && address && query)) {

      const response = await fetch("https://contact-from-fef28-default-rtdb.firebaseio.com/trailform.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(
            {
              name,
              email,
              phone,
              address,
              query,
            }
          )
        })

      if (response) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          query: "",
        });

        alert("Data Stored Succesfully!")
      }

    } else {
      alert("Please fill all the inputs.")

    }

  };

  return (
    <>
      <Navbar></Navbar>
      <div className='xl:container mx-auto'>
        <div className="my-8 mx-5 font-mont">
          <form method="POST" className="cont bg-[#F8F6FF] px-6 md:px-10 py-12 md:py-14 mt-12 md:rounded-xl md:shadow-lg rounded-lg shadow-md shdaow-[#a4a4a4]">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <div className="out md:space-y-12 space-y-8 my-6">
              <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
                <div className="flex flex-col md:w-[48%] ">
                  <span className="text-sm text-[#a4a4a4] font-semibold">
                    Your Name
                  </span>
                  <input
                    type="text"
                    className="bg-transparent font-medium p-3 focus:border-transparent outline-0"
                    name="name"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={getUserData}
                    autoComplete="off"
                    required
                  />
                  <span className="focusinput border border-2 border-[#cfcfcf]" />
                </div>
                <div className="flex flex-col md:w-[48%]">
                  <span className="text-sm text-[#a4a4a4] font-semibold">
                    Your Email
                  </span>
                  <input
                    type="email"
                    className="bg-transparent font-medium p-3 focus:border-transparent"
                    name="email"
                    placeholder="Enter your email address"
                    value={user.email}
                    onChange={getUserData}
                    autoComplete="off"
                    required
                  />
                  <span className="focusinput border border-2 border-[#cfcfcf]" />
                </div>
              </div>
              <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
                <div className="flex flex-col md:w-[48%]">
                  <span className="text-sm text-[#a4a4a4] font-semibold">
                    Your Phone Number
                  </span>
                  <input
                    type="number"
                    className="bg-transparent font-medium p-3 focus:border-transparent"
                    name="phone"
                    placeholder="Enter your mobile number"
                    value={user.phone}
                    onChange={getUserData}
                    autoComplete="off"
                    required
                  />
                  <span className="focusinput border border-2 border-[#cfcfcf]" />
                </div>
                <div className="flex flex-col md:w-[48%]">
                  <span className="text-sm text-[#a4a4a4] font-semibold">
                    Your Address
                  </span>
                  <input
                    type="text"
                    className="bg-transparent font-medium p-3 focus:border-transparent"
                    name="address"
                    placeholder="Enter your Address address"
                    value={user.address}
                    onChange={getUserData}
                    autoComplete="off"
                    required
                  />
                  <span className="focusinput border border-2 border-[#cfcfcf]" />
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col">
                  <span className="text-sm text-[#a4a4a4] font-semibold">
                    Your Query
                  </span>
                  <textarea
                    type="text"
                    className="bg-transparent font-medium p-3 focus:border-transparent"
                    name="query"
                    placeholder="Enter your message"
                    value={user.query}
                    onChange={getUserData}
                    autoComplete="off"
                    required
                  />
                  <span className="focusinput border border-2 border-[#cfcfcf]" />
                </div>
              </div>
            </div>
            <button onClick={postData} className="bg-[#7D69F9] md:mt-10 px-6 md:px-10 py-2.5 md:py-4 rounded-full text-white text-sm md:text-md font-semibold mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
