// import React from "react";

const About = () => {
  return (
    <>
      <div className="px-10 m-12">
        <div className="text-center text-white">
          <h2 className="text-6xl md:text-7xl font-bold mb-5 text-white">
            About<span className="text-orange-500"> Us</span>
          </h2>
        </div>
        <div className="text-center mb-8">
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className="flex relative justify-evenly gap-32 mb-1 items-center">
          <div className="">
            <img
              className="size-10/12 transform transition duration-500 hover:scale-110"
              src="/src/assets/About.png"
              alt=""
            />
          </div>
          <div className=" gap-8 justify-end">
            <h2 className="text-6xl text-right my-10  text-white">
              Who are<span className="text-orange-500"> we?</span>
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
      {/* Our Mission */}
      <div className="px-10 m-12">
        <div className="text-center text-white p-40">
          <h2 className="text-6xl md:text-7xl font-bold mb-5 text-white">
            Our <span className="text-orange-500">Mission</span>
          </h2>
          <p className="text-xl italic m-16">
            Our mission is to empower businesses through innovative IT and
            business solutions that drive growth and efficiency. We provide
            tailored services designed to optimize operations, enhance digital
            transformation, and foster long-term success. By partnering with our
            clients, we aim to deliver cutting-edge technology and strategic
            insights that fuel sustainable business growth.
          </p>
        </div>
      </div>
      <div className="px-10 m-12">
        <div className="text-center text-white ">
          <h2 className="text-6xl md:text-7xl font-bold mb-5 text-white">
            Our<span className="text-orange-500"> Story</span>
          </h2>
        </div>
        <div className="text-center">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className="flex relative justify-evenly gap-32  items-center">
            <img
              className="size-5/12  transform transition duration-500 hover:scale-110 rounded-lg "
              src="/src/assets/about_section/our_story.webp"
              alt=""
            />
          <div className=" gap-8 p-16 m-12 text-center">
            <p className="text-xl text-white italic text-center">
              Company X began with a vision to transform businesses through
              innovative solutions. What started as a small IT consultancy
              quickly grew into a comprehensive service provider, offering
              cutting-edge IT and business solutions. By focusing on customer
              needs and staying ahead of industry trends, Company X helped
              clients streamline operations and unlock growth potential. Through
              tailored strategies, they empowered businesses to thrive in a
              competitive landscape, becoming a trusted partner in digital
              transformation and long-term success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
