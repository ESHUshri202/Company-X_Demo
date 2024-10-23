// import React from "react";
// import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="px-10 m-12 mt-28">
        <div className="flex relative justify-evenly gap-32 my-12 items-center  mb-24 pb-24">
          <div className="block text-white mr-48 text-center">
            <h2 className=" text-6xl m-6 p-6 w-fit text-left">
              Lorem <span className="text-orange-400">ipsum</span>
            </h2>
            <p className="text-xl m-6 p-6 max-md w-70 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              id. Aspernatur dolorem temporibus ex. Deleniti ea eius fugit, quis
              error, nulla ipsam, illo unde saepe nostrum quisquam eum?
              Voluptas, earum.
            </p>
          </div>
          <div className="x-1000 h-100 size-full">
            <img className="size-320 w-100 h-100 transform transition duration-500 hover:scale-110" src="/src/assets/Home.png" alt="hero" />
          </div>
        </div>
      </div>

      {/* About Section */}

      <div className="px-10 m-12">
        <div className="text-center text-white ">
          <h2 className="text-6xl md:text-7xl font-bold mb-5 text-white">
            About<span className="text-gray-500"> Us</span>
          </h2>
        </div>
        <div className="text-center mb-10">
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className="flex relative justify-evenly gap-96 my-12 items-center">
          <div className="">
            <img
              className="size-full w-full h-full transform transition duration-500 hover:scale-110"
              src="/src/assets/About.png"
              alt=""
            />
          </div>
          <div className=" gap-8 justify-end">
            <h2 className="text-6xl text-right my-10  text-white">
              Our <span className="text-orange-500">Mission</span>
            </h2>
            <p className="text-xl text-right w-96 text-white">
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet minima corrupti soluta ullam possimus iure
              dicta architecto! Impedit odit ipsa molestiae! Culpa accusantium
              fugiat id, vel a dolor vitae numquam! sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      {/* Technologies */}
      <div className="p-10 m-12">
        <div className="text-center text-white  mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-5 text-white">Technologies</h2>
        </div>
        <div className="text-center mb-10">
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className="flex gap-14 justify-center size-sm">
          <img
            className="size-32 bg-transparent transform transition duration-500 
           hover:scale-110 shadow-lg "
            src="/src/assets/tech_icon/python.png"
            alt=""
          />
          <img
            className="size-32 transform transition duration-500 
           hover:scale-110 shadow-lg  bg-transparent"
            src="/src/assets/tech_icon/nodejs.png"
            alt=""
          />
          <img
            className="size-32 transform transition duration-500 
           hover:scale-110 shadow-lg  bg-transparent"
            src="/src/assets/tech_icon/html5.png"
            alt=""
          />
          <img
            className="size-32 transform transition duration-500 
           hover:scale-110 shadow-lg  bg-transparent"
            src="/src/assets/tech_icon/react.png"
            alt=""
          />
          <img
            className="size-32 transform transition duration-500 
           hover:scale-110 shadow-lg  bg-transparent"
            src="/src/assets/tech_icon/javascript.png"
            alt=""
          />
          <img
            className="size-32 transform transition duration-500 
           hover:scale-110 shadow-lg  bg-transparent"
            src="/src/assets/tech_icon/css3.png"
            alt=""
          />
        </div>
      </div>
      {/* Service Section  */}
      <div className="px-10 m-12">
        <div className="text-3xl text-white text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-5 text-white">What we</h2>
          <h2 className="text-6xl md:text-7xl font-bold mb-5 text-white">provide.</h2>
        </div>
        <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className="grid gap-4 grid-cols-3 m-12">
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-950">
            <img
              className="w-full"
              src="/src/assets/card_image/And.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                Android Development
              </div>
              <p className="text-gray-200 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ui design
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                kotlin
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                responsive
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-950">
            <img
              className="w-full"
              src="/src/assets/card_image/Data-Analysis.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                Data Analytics 
              </div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Data analysis
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Business Solution
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Power BI
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-950">
            <img
              className="w-full"
              src="/src/assets/card_image/frontend.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                Front-End Development
              </div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ReactJs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tailwind
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Responsive Pages
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-950">
            <img
              className="w-full"
              src="/src/assets/card_image/graphic.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                Graphic Designing
              </div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Poster/Adv Design
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Animation Design
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Banner
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-950">
            <img
              className="w-full"
              src="/src/assets/card_image/QA.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                Quality Assurance Tester
              </div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Unit Testing 
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                BlackBox Testing
              </span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span> */}
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div>
        <div className="min-w-screen min-h-screen bg-transparent flex items-center justify-center py-5">
          <div className="w-full bg-transparent  px-5 py-16 md:py-24 text-gray-800">
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center max-w-xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white">
                  What people
                </h1>
                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white">are saying.</h1>
                <h3 className="text-xl mb-5 font-light text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div className="text-center mb-10">
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
              </div>
              <div className="-mx-3 md:flex items-start">
                <div className="px-3 md:w-1/3 ">
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 
                  text-gray-800 font-light mb-6 transform transition duration-500 hover:scale-110">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          Kenzie Edgar.
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sunt ratione dolor exercitationem minima quas
                        itaque saepe quasi architecto vel! Accusantium, vero
                        sint recusandae cum tempora nemo commodi soluta
                        deleniti.
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                      </p>
                    </div>
                  </div>
                  <div className="transform transition duration-500 hover:scale-110 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=2" alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          Stevie Tifft.
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                        Lorem ipsum, dolor sit amet, consectetur adipisicing
                        elit. Dolore quod necessitatibus, labore sapiente, est,
                        dignissimos ullam error ipsam sint quam tempora vel.
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3 md:w-1/3">
                  <div className="transform transition duration-500 hover:scale-110 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=3" alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          Tommie Ewart.
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vitae, obcaecati ullam excepturi dicta error
                        deleniti sequi.
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                      </p>
                    </div>
                  </div>
                  <div className="transform transition duration-500 hover:scale-110 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=4" alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          Charlie Howse.
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptatum nostrum atque, corrupti,
                        vitae esse id accusamus dignissimos neque reprehenderit
                        natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                        iusto.
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3 md:w-1/3">
                  <div className="transform transition duration-500 hover:scale-110 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=5" alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          Nevada Herbertson.
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                        ipsum, laboriosam nostrum facere exercitationem pariatur
                        deserunt tempora molestiae assumenda nesciunt alias
                        eius? Illo, autem!
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                      </p>
                    </div>
                  </div>
                  <div className="transform transition duration-500 hover:scale-110 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=6" alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          Kris Stanton.
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem iusto, explicabo, cupiditate quas totam!
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Showcase Section */}
    </>
  );
};

export default Home;
