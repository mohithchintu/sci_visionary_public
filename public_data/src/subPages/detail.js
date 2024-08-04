import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import EB from "../components/EB";

import { db } from "../firebase";
import { useParams } from "react-router";
import PDFViewer from "../components/PDFViewer";
import "@radix-ui/themes/styles.css";
import { Tabs, Box, Text } from "@radix-ui/themes";

const Detail = () => {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }

  const charArray = journal?.aspoints ? journal.aspoints.split("\n") : [];
  const newLine = journal?.description ? journal.description.split("\n") : [];
  const Line = journal?.asdescription ? journal.asdescription.split("\n") : [];
  const arr = journal?.eb ? journal.eb.split(",") : [];
  // console.log(arr)

  useEffect(() => {
    const getJournalDetails = async () => {
      const docRef = doc(db, "jnal", id);
      const journalDetail = await getDoc(docRef);
      setJournal(journalDetail.data());
    };
    id && getJournalDetails();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="xl:container mx-auto">
        <div className="flex flex-col mt-8 font-mont px-5">
          <div className="flex justify-center items-center lg:mb-6 md:mb-5 mb-4 lg:h-[30rem] md:h-[24rem] h-[14rem]">
            <img
              className="hover:shadow-lg w-full h-full lg:rounded-2xl md:rounded-lg rounded-md"
              src={journal?.imgUrl}
              alt=""
            />
          </div>
          <div className="">
            {/* <ul className="border lg:rounded-lg md:rounded-md rounded-sm grid grid-cols-2 md:grid-cols-3 ">
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(1)}
              >
                <span
                  className={
                    toggle === 1
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  {" "}
                  Home{" "}
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(2)}
              >
                <span
                  className={
                    toggle === 2
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  {" "}
                  Aim & Scope{" "}
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(4)}
              >
                <span
                  className={
                    toggle === 4
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  {" "}
                  Editorial Board{" "}
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium hover:text-[#7D69F9]"
                onClick={() => updateToggle(4)}
              >
                <span
                  className={
                    toggle === 5
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : " text-gray-300"
                  }
                >
                  {" "}
                  Article in Press{" "}
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(3)}
              >
                <span
                  className={
                    toggle === 3
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  {" "}
                  Article Processing Fees{" "}
                </span>
              </li>
            </ul> */}
            <ul className="border lg:rounded-lg md:rounded-md rounded-sm flex space-x-4">
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(1)}
              >
                <span
                  className={
                    toggle === 1
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  Home
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(2)}
              >
                <span
                  className={
                    toggle === 2
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  Aim & Scope
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(4)}
              >
                <span
                  className={
                    toggle === 4
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  Editorial Board
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(5)}
              >
                <span
                  className={
                    toggle === 5
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : " text-[#a0a0a0]"
                  }
                >
                  Article in Press
                </span>
              </li>
              <li
                className="text-xs md:text-lg md:py-2 md:px-10 py-1 px-2 font-medium cursor-pointer hover:text-[#7D69F9]"
                onClick={() => updateToggle(3)}
              >
                <span
                  className={
                    toggle === 3
                      ? "underline underline-1 text-[#342d66] underline-offset-4"
                      : "text-[#a0a0a0]"
                  }
                >
                  Article Processing Fees
                </span>
              </li>
            </ul>
          </div>

          <div className={toggle === 1 ? "block" : "hidden"}>
            <div className="mt-6 space-y-6">
              <h1 className="text-lg sm:text-2xl font-semibold md:text-3xl">
                {journal?.title}&nbsp;&nbsp;
                <span className="italic text-gray-500">
                  {journal?.ISSN_number}
                </span>
              </h1>
              <p className="flex flex-col text-md font-regular text-justify leading-6 md:text-base md:leading-8">
                {/* {journal?.description} */}
                {newLine.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </p>
            </div>
          </div>
          <div className={toggle === 3 ? "block" : "hidden"}>
            <div className="mt-6 space-y-6">
              <h1 className="text-lg sm:text-2xl font-semibold md:text-3xl">
                Article Processing Fees (APCs)
              </h1>
              <p className="text-md font-regular text-justify leading-6 md:text-base md:leading-8">
                SCI Visionary is a publishing company dedicated to providing an
                open platform for international researchers to publish their
                work. Unlike traditional publishing models, our services are
                self-financed, similar to listener-supported radio and
                viewer-supported television. We refrain from advertising or
                subscription offers, relying solely on the contributions from
                our authors. In order to sustain the day-to-day operations of
                our journals, SCI Visionary implements an APC (Article
                Processing Charge) on all manuscripts that successfully pass
                through our rigorous peer-review process and are accepted for
                publication. Once an article is published in one of our
                journals, SCI Visionary ensures its perpetual online
                availability. The published articles can be freely shared,
                cited, excerpted (with appropriate attribution), and accessed by
                anyone without any restrictions.
              </p>
              <table className="rounded-lg text-left p-2 w-full border border-collapse md:text-md">
                <tr className="border">
                  <th className="py-3 px-3 border border-collapse">
                    Research/Review Articles
                  </th>
                  <td className="font-medium py-3 px-3 border border-collapse">
                    USD 949
                  </td>
                </tr>
                <tr className="border">
                  <th className="py-3 px-3 border border-collapse">
                    Case Report/Case Series
                  </th>
                  <td className="font-medium py-3 px-3 border border-collapse">
                    USD 749
                  </td>
                </tr>
                <tr className="border">
                  <th className="py-3 px-3 border border-collapse">
                    Short Communication
                  </th>
                  <td className="font-medium py-3 px-3 border border-collapse">
                    USD 749
                  </td>
                </tr>
                <tr className="border">
                  <th className="py-3 px-3 border border-collapse">
                    Editorial/Opinion/Letter to Editor
                  </th>
                  <td className="font-medium py-3 px-3 border border-collapse">
                    USD 749
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={toggle === 2 ? "block" : "hidden"}>
            <div className="mt-6 space-y-6">
              <h1 className="text-lg sm:text-2xl font-semibold md:text-3xl">
                {journal?.astitle}&nbsp;&nbsp;
                <span className="italic text-gray-500">
                  {journal?.ISSN_number}
                </span>
              </h1>
              <p className="text-md font-regular text-justify leading-6 md:text-lg md:leading-8">
                <p className="flex flex-col text-md font-regular text-justify leading-6 md:text-base md:leading-8">
                  {/* {journal?.description} */}
                  {Line.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </p>
                <ul
                  className="list-disc text-md font-regular text-justify leading-6 mt-5 md:text-base md:leading-8 md:ml-12 ml-6 sm:ml-8"
                  id="ul"
                >
                  {charArray.map((liText) => (
                    <li key={liText}>{liText}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
          <div className={toggle === 4 ? "block" : "hidden"}>
            <EB eb={arr} />
          </div>
          <div className={toggle === 5 ? "block" : "hidden"}>
            {journal?.article &&
              journal?.article.map((item, index) => (
                <>
                  <Tabs.Root defaultValue="info">
                    <div
                      key={index}
                      className="flex items-center border-b border-gray-200 py-3"
                    >
                      <p className="text-gray-700 text-sm font-semibold">
                        {index + 1}
                      </p>
                      <p className="text-blue-900 ml-3 text-sm font-bold">
                        {item.atitle}
                      </p>
                    </div>
                    <Tabs.List>
                      <Tabs.Trigger value="info">
                        Article Information
                      </Tabs.Trigger>
                      <Tabs.Trigger value="abstract">Abstract</Tabs.Trigger>
                      <Tabs.Trigger value="pdf">Pdf</Tabs.Trigger>
                    </Tabs.List>
                    <Box px="4" pt="3" pb="2">
                      <Tabs.Content value="info">
                        <Text size="3" className=" font-sans">
                          <span className="font-bold text-lg">Author: </span>

                          {item?.author &&
                            item?.author.map((authorItem, authorIndex) => (
                              <span key={authorIndex}>
                                <span className=" font-normal text-lg">
                                  {authorItem.author}
                                </span>
                                <sup className="font-normal">
                                  {authorItem.sup}
                                </sup>
                                <span>
                                  {authorIndex === item.author.length - 1
                                    ? ""
                                    : ", "}
                                </span>
                              </span>
                            ))}
                          <p className="font-normal text-md">
                            {item.author_details}
                          </p>

                          <span className="font-bold text-lg">Email: </span>
                          <span className="font-normal text-lg">
                            {item.email}
                          </span>
                          <br />
                          <span className="font-bold text-lg">
                            Received date:{" "}
                          </span>
                          <span className="font-normal text-lg">{item.rd}</span>
                          <br />
                          <span className="font-bold text-lg">
                            Accepted date:{" "}
                          </span>
                          <span className="font-normal text-lg">{item.ad}</span>
                          <br />
                          <span className="font-bold text-lg">
                            Published date:{" "}
                          </span>
                          <span className="font-normal text-lg">{item.pd}</span>
                        </Text>
                      </Tabs.Content>
                      <Tabs.Content value="abstract">
                        <Text size="2">
                          <p className="font-sans text-lg indent-7">
                            {item.tab3}
                          </p>
                        </Text>
                        {/* <PDFViewer className='flex align-bottom' pdfUrl={item.fileLink} /> */}
                      </Tabs.Content>
                      <Tabs.Content value="pdf">
                        <Text size="2" className="font-sans">
                          Open and Download PDF Here
                        </Text>
                        <a
                          href={item.fileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 ml-3 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm transition duration-300 ease-in-out"
                          download={`${item.atitle}.pdf`}
                        >
                          PDF
                        </a>
                      </Tabs.Content>
                    </Box>
                  </Tabs.Root>
                </>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Detail;
