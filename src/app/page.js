import React from "react";
import Herosection from "./components/HeroSection";

const Page = () =>{
  return(
    <>
       <Herosection HeroTitle={"Let's watch a  movie Together"} imageUrl={"/hero.svg"} HeroPara={" Checkpout the new movies"} />
    </>
  );
};

export default Page;