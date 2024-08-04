import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import peer from "../assets/peer1.svg";

function Peerreview() {
  return (
    <>
      <Navbar />
      <div className="xl:container mx-auto">
        <div className="my-8 mx-16 font-mont">
          <h1 className="text-2xl font-semibold md:text-3xl">About Us</h1>
          <p className="text-md font-regular text-justify leading-6 mt-5 md:text-base md:leading-8">
            SCI Visionary Publications is the foremost online resource for academics,
            scholars, and innovators. Our platform connects a global network of
            professionals and specialists in numerous disciplines of research,
            enabling unprecedented knowledge-sharing and cooperation.
            <br /><br />
            Through a variety of digital tools, SCI Visionary is dedicated to allowing researchers,
            educators, and practitioners from all over the world to explore the
            frontiers of science, technology, engineering, and mathematics (STEM).
            Our platform provides a plethora of information and insights that
            drive creativity and discovery, ranging from scholarly articles and
            research papers to thought-provoking discussions and interviews with
            prominent experts in the field.
            <br /><br />
            We believe that science and innovation have the ability to transform the world, and we are dedicated to
            providing a platform that enables researchers and academics to make a
            difference. Our platform is designed to help you uncover your
            potential and achieve your academic and professional goals, whether
            you are a seasoned researcher or an ambitious student.
            <br /><br />
            Join us today to explore a world of limitless opportunities for your research and
            innovation. Let us influence the future of academics together and make
            a difference in the world.
          </p>

          <h1 className="text-2xl font-semibold md:text-3xl mt-8">Why Publish with Us</h1>
          <p className="text-md font-regular text-justify leading-6 mt-5 md:text-base md:leading-8">
            <ul className="ml-4 list-disc list-inside text-md font-regular text-justify md:space-y-4 space-y-2 leading-6 mt-5 md:text-base md:leading-8">
              <li>
                <span className="font-semibold"> Rigorous and Swift Peer Review:</span> Our expert reviewers ensure a thorough and timely review process to provide constructive feedback for authors.
              </li>
              <li>
                <span className="font-semibold"> Global Reach:</span> With an international readership and online availability, your research will be accessible to researchers, clinicians, and policymakers worldwide.
              </li>
              <li>
                <span className="font-semibold"> High Impact:</span> We strive to publish impactful research that contributes significantly to the field of medicine and Life sciences.
              </li>
              <li>
                <span className="font-semibold"> Ethical Standards:</span> We maintain the highest ethical standards and adhere to COPE guidelines to ensure integrity in publishing.
              </li>
              <li>
                <span className="font-semibold"> Supportive Editorial Team:</span> Our editorial team is committed to assisting authors at every stage of the publication process.
              </li>
            </ul>
          </p>

          <h1 className="text-2xl font-semibold md:text-3xl mt-12">Peer Review</h1>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="right">
              <ul className="list-disc ml-8 md:mt-6 mt-3 md:space-y-4 space-y-2">
                <li className="leading-7">
                  <span className="font-semibold text-lg">Submission:</span><br />
                  The author submits their research paper to a journal or conference for consideration.
                </li>
                <li className="leading-7">
                  <span className="font-semibold text-lg">Pre-Screening:</span><br />
                  The submitted paper undergoes an initial check by the editorial team to ensure it meets the basic requirements, such as adherence to guidelines, topic relevance, and overall quality.
                </li>
                <li className="leading-7">
                  <span className="font-semibold text-lg">Reviewer Assignment:</span><br />
                  The editorial team selects suitable reviewers from their pool of experts in the field and assigns them the task of reviewing the paper.
                </li>
                <li className="leading-7">
                  <span className="font-semibold text-lg">Reviewer Reviews:</span><br />
                  The assigned reviewers thoroughly examine the paper, evaluating its methodology, validity of results, clarity, and overall contribution to the field.
                </li>
                <li className="leading-7">
                  <span className="font-semibold text-lg">Editor's Decision:</span><br />
                  The reviewers submit their feedback and recommendations to the editor, who makes a decision based on the reviewer's comments, their own assessment, and the journal's editorial policy.
                </li>
                <li className="leading-7">
                  <span className="font-semibold text-lg">Author's Revision:</span><br />
                  If the paper requires revisions, the author is notified and given an opportunity to address the reviewer's comments, improve the paper, and provide clarifications where necessary.
                </li>
                <li className="leading-7">
                  <span className="font-semibold text-lg">Final Decision & Editing:</span><br />
                  The editor reviews the revised paper, ensuring that the authors have adequately addressed the reviewer's concerns. The editor then makes a final decision regarding acceptance, rejection, or further revision.
                </li>
                <li className="leading-7">
                  <span className="font-semibold text-lg">Publication:</span><br />
                  If the paper is accepted, it moves on to the publication stage, where it undergoes formatting, proofreading, and other editorial processes before being published in the journal or presented at the conference.
                </li>
              </ul>
            </div>
            <img src={peer} alt="" className="py-6 md:px-4" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Peerreview;
