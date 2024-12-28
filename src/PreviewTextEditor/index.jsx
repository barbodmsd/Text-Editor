import { Stack } from "@mui/material";
import MarkdownIt from "markdown-it";
import React, { useState } from "react";

// Markdown parser
const mdParser = new MarkdownIt();

export default function PreviewTextEditor({ text = "", dir = "rtl" }) {
  return (
    <>
      <Stack
        sx={{
          border: "1px solid #ccc",
          p: "16px",
          borderRadius: "8px",
          bgcolor: "#f9f9f9",
          direction: dir,
          // you can write custom style here like below example:

          // '& img':{
          // width:'50%'
          // },
          // "& p,& h1,& h2,...": {
          //   fontSize: "12px",
          // },
        }}
        dangerouslySetInnerHTML={{ __html: mdParser.render(text) }}
      />
    </>
  );
}
