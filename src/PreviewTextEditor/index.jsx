import { Stack } from "@mui/material";
import MarkdownIt from "markdown-it";
import React, { useState } from "react";

// Markdown parser
const mdParser = new MarkdownIt();

export default function PreviewTextEditor({ text = "", dir = "rtl", styles }) {
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
          "& img": {
            width: "50%",
            height: "500px",
            objectFit: "cover",
          },
          // "& p,& h1,& h2,...": {
          //   fontSize: "12px",
          // },
          ...styles,
        }}
        dangerouslySetInnerHTML={{ __html: mdParser.render(text) }}
      />
    </>
  );
}
