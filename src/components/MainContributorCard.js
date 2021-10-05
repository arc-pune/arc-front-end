import React from "react";

const MainContributor = (Props) => {
  return (
    <div className="relative w-70 h-70  my-24 mx-auto">
      <img
        className="absolute  h-52  bg-white  box-border object-cover border-solid border-black border-2  rounded-2xl "
        src={Props.image}
        alt="user"
        style={{
          width: "15.5rem",
          bottom: "140px",
          right: "31px",
        }}
      />
      <div className=" w-64 h-72 bg-white  box-border border-solid border-black border-2  rounded-2xl ">
        <h3 className=" justify-center w-70 h-1.5 mt-36 text-center mx-1.5 not-italic    font-bold text-2xl text-black font-sans">
          {Props.name}
        </h3>
        <h6
          className=" w-50 h-1.5  mt-8  text-center mx-auto not-italic font-bold  text-black Class

text-xl font-sans"
        >
          {Props.role}
        </h6>
        <div className="grid grid-cols-3 gap-3 mt-8  mx-11  justify-center w-50">
          <a href={Props.linkedin} alt="/">
            <img src="/Assets/icons/linkedin.svg" alt="" />
          </a>
          <a href={Props.Twitter}>
            <img src="/Assets/icons/twitter.svg" alt="" />
          </a>
          <a href={Props.Github}>
            <img src="/Assets/icons/github.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContributor;
