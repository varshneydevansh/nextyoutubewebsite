import React from "react";

const Movie = async () =>{

  const url = process.env.RAPID_KEY
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c3b14a2becmsh9d6a7239653595bp1826a5jsn1bc34d513c20',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res =  await fetch(url, options);
const data = await res.json();

//console.log(data);
  return(
    <div>
       <h1> MOVIE </h1> 

    </div>
  );
};

export default Movie;