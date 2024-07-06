import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json"
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center
         text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you <span className="text-green-500">Here! :)</span> 
          </h1>
          <p className="mt-12">As you read a book word by word and page by page, you participate in its creation, just as a cellist playing a Bach suite participates, note by note, in the creation, the coming-to-be, the existence, of the music. And, as you read and re-read, the book of course participates in the creation of you, your thoughts and feelings, the size and temper of your soul. – Ursula K. Le Guin</p>
          <Link to={"/"}>
          <button className="bg-green-500  text-white px-4 py-2 mt-6 rounded-md hover:bg-green-700 duration-300 hover:text-lg ">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
           list.map((item)=>(
            <Cards item={item} key={item.id}/>
           ))
          }
        </div>
      </div>
    </>
  );
};

export default Course;
