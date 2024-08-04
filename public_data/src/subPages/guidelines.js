import React from "react";
import author from "../assets/author.svg";
import editor from "../assets/editor.svg";
import reviewer from "../assets/reviewer.svg";
import { useState } from "react";
import Navbar from './navbar';
import Footer from './footer';

function Guidelines() {

    const [toggle, setToggle] = useState(1)
    function updateToggle(id){
        setToggle(id)
    }

  return (
    <>
    <Navbar/>
    <div className='xl:container mx-auto'>
      <div className="bar mt-8 font-mont px-5">
        <div className="tab">
          <ul className="flex border lg:rounded-xl md:rounded-ld rounded-md">
            <li className="text-sm md:text-base md:py-4 md:px-10 py-2 px-3 font-medium cursor-pointer hover:text-[#7D69F9]" onClick={() => updateToggle(1)}>
            <span className={toggle === 1 ? "underline text-[#7D69F9] underline-offset-4" : "text-[#a0a0a0]"}> Author Guidelines </span>
            </li>
            <li className="text-sm md:text-base md:py-4 md:px-10 py-2 px-3 font-medium cursor-pointer hover:text-[#7D69F9]" onClick={() => updateToggle(2)}>
            <span className={toggle === 2 ? " underline text-[#7D69F9] underline-offset-4" : "text-[#a0a0a0]"}> Editor Guidelines </span>
            </li>
            <li className="text-sm md:text-base md:py-4 md:px-10 py-2 px-3 font-medium cursor-pointer hover:text-[#7D69F9]" onClick={() => updateToggle(3)}>
            <span className={toggle === 3 ? "underline text-[#7D69F9] underline-offset-4" : "text-[#a0a0a0]"}> Reviewer Guidelines </span>
            </li>
          </ul>
        </div>
        <div className={toggle === 1 ? "block" : "hidden"}>
        <div className="mt-6 space-y-6">
          <h1 className="text-lg sm:text-2xl font-semibold md:text-3xl">
            Author guidelines
          </h1>
          <p className="text-md font-regular text-justify leading-6 md:text-base md:leading-8">
            The authors and the journals or the manuscripts written by them are
            the assets of any publications. Authors are not just meant to submit
            their content but also have few guidelines to follow to have better
            coordination with the publishers by whom they want to be published.
          </p>
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
            <img src={author} alt="" className="my-12 lg:h-[30rem] lg:mx-6 sm:h-[42rem]"/>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">Guidelines</h3>
              <div className="">
                <ul className="list-disc text-md font-regular text-justify leading-6 mt-5 md:text-base md:leading-8 md:ml-12 ml-6 sm:ml-8">
                  <li>
                    The author should pledge that the manuscript submitted is
                    completely written and owned by him and must mention if
                    there are any co-authors.
                  </li>
                  <li>
                    The co-authors and the references must be willing to publish
                    the article.
                  </li>
                  <li>
                    The idea and interest behind the journal must be mentioned
                    by the author.
                  </li>
                  <li>
                    The manuscript should be submitted in the described font
                    size and font style without leading the page limit.
                  </li>
                  <li>
                    It should also be guaranteed that the content is
                    plagiarism-free.
                  </li>
                  <li>
                    He should also guarantee that the manuscript is not
                    submitted to any other publications by him or his
                    co-authors.
                  </li>
                  <li>
                    One should be able to explain the context in the given
                    abstract form withoutcrossing the word limit.
                  </li>
                  <li>
                    All the references one used while creating it must be
                    submitted.
                  </li>
                  <li>
                    The author is held responsible for any impropriety or
                    obscenity in the given article.
                  </li>
                  <li>
                    The author will be given a certain time by the publications
                    after the submission.
                  </li>
                  <li>One must wait until the peer review is done.</li>
                  <li>
                    Once the peer review is done, there are quite chances of
                    rejection. Every author has a right to know the reason
                    behind the rejection. He can contact the editorial board or
                    the concerned team to know it.
                  </li>
                  <li>
                    The comments and the feedback given by the reviewers must be
                    taken considerably as the submission goes through the hands
                    of a good number of reviewers.
                  </li>
                  <li>
                    After reviewing the submission, the publications give enough
                    time to the author to submit it again after the corrections
                    are made.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className={toggle=== 2 ? "block" : "hidden"}>
        <div className="space-y-6 mt-6">
          <h1 className="text-lg sm:text-2xl font-semibold md:text-3xl">
            Editor guidelines
          </h1>
          <p className="text-md font-regular text-justify leading-6 md:text-base md:leading-8">
          For the success of a Journal, book, newspaper, or a website, the editor plays an important role. The editorial board comprises of experts from various departments who are best at their respective jobs. Such a quality team makes the best journals. The editor in chief takes hold of all the responsibilities of the board and is the one who finalizes to publish any document or a journal. It is the sole responsibility of the editor to guarantee the caliber of the selected journals.
          <br/><br/>The publications also welcome scholars from different segments to check the quality and rightness of articles. Their ideas are also included in the articles that are being published.
          </p>
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
            <img src={editor} alt="" className="my-12 lg:h-[30rem] lg:mx-6 sm:h-[42rem]"/>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">Guidelines</h3>
              <div className="">
                <p className="text-md font-regular text-justify leading-6 md:text-base md:leading-8 mt-4">The editor acts as the captain of a ship during issuing the publications.</p>
                <ul className="list-disc text-md font-regular text-justify leading-6 mt-5 md:text-base md:leading-8 md:ml-12 ml-6 sm:ml-8">
                  <li>
                  He must manage and coordinate with the editorial board.
                  </li>
                  <li>
                  During peer review disputes that may take place among the board members, the editor must make the best of all choices without causing any issues.
                  </li>
                  <li>
                  It is always good to welcome guest editors for better performances.
                  </li>
                  <li>
                  The new ideas by the members must be encouraged as it develops the motivation in them.
                  </li>
                  <li>
                  The views of the audience must be considered.
                  </li>
                  <li>
                  It is always good to review the policies of the site.
                  </li>
                  <li>
                  Communication is a major factor for accomplishing the task when a quite number of members are involved in the board.
                  </li>
                  <li>
                  The editor must also update the changes to the publishers whenever necessary.
                  </li>
                  <li>
                  Following up with the updates is also required for the editor.
                  </li>
                  <li>
                  The truthfulness of the article must be also verified.
                  </li>
                  <li>
                    Taking feedback and responding is essential for the betterment of the publishers.
                    </li>
                  <li>
                  The editor also comes up with ideas to promote the articles written in journals.
                  </li>
                  <li>
                  For fulfilling all the above terms, one must be highly qualified and experienced to become an editor as the reputation of the publishers depends on him.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div></div>

        
        <div className={toggle=== 3 ? "block" : "hidden"}>
        <div className="mt-6 space-y-6">
          <h1 className="text-lg sm:text-2xl font-semibold md:text-3xl">
            Reviewer guidelines
          </h1>
          <p className="text-md font-regular text-justify leading-6 md:text-base md:leading-8">
          For any journal to be published, reviews are very important. The higher the number of reviews is, the lesser is the risk of having flaws. Most of the reviews are done by the editorial board members as they are highly qualified and experienced. But for finer outputs these are not enough. This is where reviewers come into the picture. The only duty of the reviewers is to review the articles thoroughly. Only then the expectations and the high standards of the audience can be reached, and this is how the publications will be able to stand the competition.
        <br/><br/>
        A reviewer must be an expert and must be aware of all the advances in the given subject. A greater number of reviews are taken from reviewers to avoid bias and favoritism among the authors. The reviewers are not allowed to show any differences like gender, religion, caste, and status. To avoid such disparities the author names are not revealed before giving for the reviewing process. The feedback given by the reviewers must be straight forward and crystal clear.
          </p>
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
            <img src={reviewer} alt="" className="my-2 lg:h-[30rem] lg:mx-6 sm:h-[42rem]"/>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">Guidelines</h3>
              <div className="">
                <p className="text-md font-regular text-justify leading-6 md:text-base md:leading-8 mt-4">Here are some more regulations that must be followed by a reviewer.</p>
                <ul className="list-disc text-md font-regular text-justify leading-6 mt-5 md:text-base md:leading-8 md:ml-12 ml-6 sm:ml-8">
                  <li>
                  The reviewers must not directly correct the content but should report to the concerned team or editor. The comments made by them must be reasonable and acceptable.
                  </li>
                  <li>
                  The content must not be disclosed to anyone outside the staff.
                  </li>
                  <li>
                  The articles must be thoroughly verified so that any kind of obscenity or abuse is not present.
                  </li>
                  <li>
                  The content must not have any signs of plagiarism and should be real to the knowledge of the author.
                  </li>
                  <li>
                  The submitted article must not be present in any other publications or journal by the same or a different author.
                  </li>
                  <li>
                  The reviewers should not mislead any information present in the content.
                  </li>
                  <li>
                  The reviewer must be skilled enough to justify all the given responsibilities as it depends on the reviewer’s decision and report whether to publish the given article
                  </li>
                </ul>
                <p className="text-md font-regular text-justify leading-6 md:text-base md:leading-8 mt-16">
                    The reviewer report should come under any of the following:
                </p>
                <ul className="list-disc text-md font-regular text-justify leading-6 mt-5 md:text-base md:leading-8 md:ml-12 ml-6 sm:ml-8">
                    <li>Accept</li>
                    <li>Minor revision</li>
                    <li>Major revision</li>
                    <li>Reject</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Guidelines;
