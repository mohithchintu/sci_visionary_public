import React, { useState, useEffect } from "react";
import Navbar from './navbar';
import Footer from './footer';
import { db, storage } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const initalState = {
  name: '',
  email: '',
  phone: '',
  j_title: '',
  j_category: ''
};

const j_categoryOption = [
  'op1',
  'op2',
  'op3'
];
function Submit() {
  const [form, setForm] = useState(initalState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const { name, email, phone, j_title, j_category } = form;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `documents/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is pasued");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Document upload to fire base succesfully");
            setForm((prev) => ({ ...prev, docUrl: downloadUrl }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getJournalDetails();
  }, [id]);

  const getJournalDetails = async () => {
    const docRef = doc(db, 'jmanuscripts');
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onJCategoryChange = (e) => {
    setForm({ ...form, j_category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (j_category && name && email && phone && j_title) {
      await addDoc(collection(db, 'jmanuscripts'), { ...form })
      toast.success("Created Successfully");
    } else {
      return toast.error("All fields are mandatory");
    }
    navigate('/journals');
  }


  return (
    <>
      <Navbar />
      <div className='xl:container mx-auto'>
        <div className="my-8 mx-5 font-mont">
          <form onSubmit={handleSubmit} className="cont bg-[#F8F6FF] px-6 md:px-10 py-12 md:py-14 mt-12 md:rounded-xl md:shadow-lg rounded-lg shadow-md shdaow-[#a4a4a4]">
            <h1 className="text-2xl font-semibold">Submit Manuscripts</h1>
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
                    value={name}
                    onChange={handleChange}
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
                    value={email}
                    onChange={handleChange}
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
                    value={phone}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <span className="focusinput border border-2 border-[#cfcfcf]" />
                </div>
                <div className="flex flex-col md:w-[48%]">
                  <span className="text-sm text-[#a4a4a4] font-semibold">
                    Journal title
                  </span>
                  <input
                    type="text"
                    className="bg-transparent font-medium p-3 focus:border-transparent"
                    name="j_title"
                    placeholder="Enter your journal title"
                    value={j_title}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <span className="focusinput border border-2 border-[#cfcfcf]" />
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="col-12 py-3">
                  <select
                    value={j_category}
                    onChange={onJCategoryChange}
                    className="catg-dropdown bg-transparent border px-3 py-1 rounded-md">
                    <option>Please select journal category</option>
                    {j_categoryOption.map((option, index) => (
                      <option value={option || ""} key={index}>
                        {option}
                      </option>))}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control border-none"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
            <button
              className="duration-300 ease-in-out bg-[#7968ec] px-6 md:px-10 py-2.5 md:py-4  rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#7D69F9] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]"
              type="submit"
              disabled={progress !== null && progress < 100}>
              Sumbit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Submit;