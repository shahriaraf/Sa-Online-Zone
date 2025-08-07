import React from "react";
import { Outlet } from "react-router-dom";
import { usePostJob } from "../Context/PostJobProvider";

const PostJob = () => {
  const { activeLine1, activeLine2, activeLine3 } = usePostJob(false); // Collect data from the context api

  return (
    <div>
      <div className="post_job_section p-2 sm:p-4 bg-gray-100">

                 <div className="animate_tile p-3 sm:p-6 rounded-lg shadow-md bg-blue-100 flex justify-center items-center space-x-4">
      {/* Animated Stat Circle */}
      <div className="stat_circle animate-bounce-custom"></div>

      {/* Job Title*/}

        <p className="text-gray-700 font-semibold text-2xl primary_text_color">Post New Job</p>


                </div>
          <div className="bg-white p-4 sm:p-6 md:p-8">
              <div className=" py-4 p-2 sm:p-4 md:p-8 lg:p-12 max-w-6xl mx-auto bg-white shadow-sm border border-gray-200">
          {/* ------------------ job progess bar ------------*/}

  
          <div className="w-full md:w-[95%] post_job_progress flex mx-auto p-4">
            {/* ------- location */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-blue-500 rounded-full text-white font-semibold text-2xl flex justify-center items-center z-10 relative">
                  1
                </div>
                <p className="progess-para hidden lg:block ">Location</p>
              </div>
                {/*line 1 */}
              <div
                className={`line_1 w-full h-1 absolute top-5 left-5  z-0 ${
                  activeLine1 ? "bg-blue-500" : "bg-gray-300"
                } `}
              ></div>
            </div>

            {/* ------------ category */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div
                  className={`w-10 lg:w-12 h-10 lg:h-12 shadow-sm border border-gray-300 rounded-full font-semibold text-2xl flex justify-center items-center z-10 relative ${
                    activeLine1
                      ? "bg-blue-500 text-white"
                      : " bg-white  text-black"
                  }`}
                >
                  2
                </div>
                <p className="progess-para hidden lg:block ">Select Category</p>
              </div>
                        {/* line 2 */}
              <div
                className={`line_2 w-full h-1 absolute top-5 left-5  z-0 ${
                  activeLine2 ? "bg-blue-500" : "bg-gray-300"
                } `}
              ></div>
            </div>

            {/* ------------ Job Information */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div
                  className={`w-10 lg:w-12 h-10 lg:h-12 shadow-sm border border-gray-300 rounded-full font-semibold text-2xl flex justify-center items-center z-10 relative ${
                    activeLine2
                      ? "bg-blue-500 text-white"
                      : " bg-white  text-black"
                  }`}
                >
                  3
                </div>
                <p className="progess-para hidden lg:block ">Job Information</p>
              </div>
                    {/* line 3 */}
              <div
                className={`line_3 w-full h-1 absolute top-5 left-5  z-0 ${
                  activeLine3 ? "bg-blue-500" : "bg-gray-300"
                } `}
              ></div>
            </div>

            {/* ------------ Budget & Setting */}
            <div className="w-[25%] location_progress relative">
              <div className=" ">
                <div
                  className={`w-10 lg:w-12 h-10 lg:h-12 shadow-sm border border-gray-300 rounded-full font-semibold text-2xl flex justify-center items-center z-10 relative ${
                    activeLine3
                      ? "bg-blue-500 text-white"
                      : " bg-white  text-black"
                  }`}
                >
                  4
                </div>
                <p className="progess-para hidden lg:block ">Budget & Setting</p>
              </div>
            </div>
          </div>

          {/* render dynamic content */}

          <div>
            <Outlet></Outlet>
          </div>
          
        </div>
          </div>
      </div>
    </div>
  );
};

export default PostJob;