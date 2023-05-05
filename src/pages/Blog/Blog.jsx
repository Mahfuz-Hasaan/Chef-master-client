import React from "react";
import {FaFileDownload} from "react-icons/fa";
import jsPDF from "jspdf";
const Blog = () => {
   const pdfGenerate = () =>{
        const doc = new jsPDF();
        doc.text("Welcome To Blog Page", 10, 10);
        doc.save("blog.pdf");
    }
  return (
    <div className="my-5">
        <div className="w-10/12 mx-auto text-2xl font-bold text-center mb-10">Welcome To Blog Page</div>
        <div onClick={pdfGenerate} className="flex gap-4 items-center font-bold text-xl mx-auto my-4 cursor-pointer drop-shadow-lg rounded-lg bg-white w-fit px-5 py-2">
            <p>Download PDF</p>
            <FaFileDownload ></FaFileDownload>
        </div>
      <div className=" w-10/12 mx-auto">
        <div className="stack ">
          <div className="card shadow-md bg-teal-50 text-black">
            <div className="card-body">
              <h2 className="card-title">
                What is the the differences between uncontrolled and controlled
                components?
              </h2>
              <p className="pl-8">
                In React, controlled components refer to components that have
                their state and behavior controlled by the parent component.
                These components rely on props passed down from the parent
                component to update their state and behavior. Uncontrolled
                components refer to components that manage their own state
                internally.
              </p>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                How to validate React props using PropTypes?
              </h2>
              <ul className="pl-8">
                <li>any : The prop can be of any data type</li>
                <li>bool : The prop should be a Boolean.</li>
                <li>number : The prop should be a number.</li>
                <li>string : The prop should be a string.</li>
                <li>func : The prop should be a function.</li>
              </ul>
            </div>

            <div className="card-body">
              <h2 className="card-title">
                What is a custom hook, and why will you create a custom hook?
              </h2>
              <p className="pl-8">
                Custom React JS hooks offer reusability as when a custom hook is
                created, it can be reused easily, which makes the code cleaner
                and reduces the time to write the code. It also enhances the
                rendering speed of the code as a custom hook does not need to be
                rendered again and again while rendering the whole code.
              </p>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                What is the difference between nodejs and express js.?
              </h2>
              <p className="pl-8">
                Express is a minimal and flexible node. js web application
                framework, providing a robust set of features for building
                single and multi-page, and hybrid web applications. On the other
                hand, Node. js is detailed as "A platform built on Chrome's
                JavaScript runtime for easily building fast, scalable network
                applications".
              </p>
            </div>
          </div>

          <div className="card shadow-sm bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Notification 3</h2>
              <p>You have 3 unread messages. Tap here to see.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
