import React from "react";

function Cards({ item }){
  
 return(
  <>
      <div className="mt-4 my-3 p-8 z-10">
        <div className="card w-84 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-green-900 dark:text-white dark:border">
          <figure>
            <img className="w-full" src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge text-xs border-black bg-green-700 badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-600 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
 )
}

export default Cards;
