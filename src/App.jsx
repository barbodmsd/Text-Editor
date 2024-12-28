import React, { useEffect, useState } from "react";
import EnglishPreview from "./English/EnglishPreview";
import TextEditor from "./TextEditor";

export default function App() {
  const [text, setText] = useState(``);
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
      {/* persian editor */}
      {/* <PersianEditor/> */}
      {/* <PersianPreview/> */}

      {/* english editor */}
      {/* <EnglishEditor/> */}
      {/* <EnglishPreview /> */}
      
      <TextEditor text={text} setText={setText} />
      {/* <EnglishPreview/> */}
    </>
  );
}
