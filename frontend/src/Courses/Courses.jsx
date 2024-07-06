import React from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import Course from "../componants/Course";

const Courses = () => {
  return (
    <> <div className="z-1">
  <Navbar />
    </div>
    
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
