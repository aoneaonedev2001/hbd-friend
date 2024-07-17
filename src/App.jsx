import React, { useState } from "react";
import Con1 from "./component/content1";
import Con2 from "./component/content2";
import Con3 from "./component/content3";
import Con4 from "./component/content4";



const App = () => {
  return (
    <div className=" gap-[50px] px-[10px] w-[400px] mx-auto border-[1px] scroll-smooth flex flex-col items-center  ">
      <Con1 />
      <Con2 />
      <Con3 />
      <Con4 />
    </div>
  );
};

export default App;
