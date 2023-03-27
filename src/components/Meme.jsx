import React, { useState } from "react";
import styled from "styled-components";
import memeData from "../memeData";

const Meme = () => {
  const Form = styled.div`
    display: grid;
    grid-template: 40px 40px / 200px 200px;
    gap: 17px;
    margin-top: 20px;
    .form--button {
      grid-column: 1/-1;
    }
  `;

  const [allMeme] = useState(memeData.data.memes);
  console.log(allMeme);

  const [meme, setMeme] = useState({
    topText: allMeme[0].id,
    bottomText: allMeme[0].name,
    randomImage: allMeme[0].url
  });

  const getMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    setMeme((oldValue) => {
      return {
        ...oldValue,
        topText: allMeme[randomNumber].id,
        bottomText: allMeme[randomNumber].name,
        randomImage: allMeme[randomNumber].url
      };
    });
  };

  return (
    <main>
      <Form className="form">
        <input type="text" className="form--input" value={meme.topText} />
        <input type="text" className="form--input" value={meme.bottomText} />
        <button className="form--button" onClick={getMeme}>
          Get a new meme image
        </button>
        <img src={meme.randomImage} alt="memeImage" />
      </Form>
    </main>
  );
};

export default Meme;
