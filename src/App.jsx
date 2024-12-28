import React, { useEffect, useState } from "react";
import PreviewTextEditor from "./PreviewTextEditor";
import TextEditor from "./TextEditor";

export default function App() {
  const [text, setText] = useState(``);
  // this text state will save your text from text-editor and after that you can send the text state
  // this text state get the prev data from db and you can show it and change the text (it's good for PATCH method)

  // if you won't set data in text state like PATCH method you can ignore this useEffect
  // it's just show the data in db for PATCH and change
  useEffect(() => {
    (async () => {
      const res = await fetch(import.meta.env.VITE_API + "v1/meals", {
        method: "GET",
        headers: {
          "branch-code": "17220700380eae0beb",
        },
      });
      const data = await res.json();
      setText(data?.data?.d[0]?.desc);
    })();
  }, []);

  console.log(text);

  return (
    <>
      {/* npm i react-markdown-editor-lite */}
      {/* you always should send text and setText for get the value of text editor
       it's a simple and clean way to get the value from text editor */}
      <TextEditor text={text} setText={setText} />

      {/* npm i markdown-it */}
      <PreviewTextEditor text={text} />
    </>
  );
}
