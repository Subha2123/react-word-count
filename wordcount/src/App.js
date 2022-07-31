import React from "react";
import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState("");
  function words() {
    let text =
      "Google is the most popular company founded by Larry Page and Sergey Brin in Ninteen Nighty Eight. The term Google comes from a mathematical word googol, which means one with a hundred zeros.Google is an internet savvy market that has created a global impact .Google has overturned the lives of people with its system of world information accessible and useful.";
    text = text.replace(/,/g, "");
    text = text.replace(/\./g, "");
    text = text.toLowerCase(text);
    text = text.split(" ");
    console.log(`${text.length}`);
    const wordCount = {};
    for (let i = 0; i < text.length; i++) {
      if (wordCount[text[i]] === undefined) {
        wordCount[text[i]] = 1;
      } else {
        wordCount[text[i]]++;
      }
    }
    console.log(wordCount);
    setCount(JSON.stringify(wordCount, null, 8));
  }
  useEffect(() => words(), []);
  return (
    <>
      <p>{count}</p>
    </>
  );
}
