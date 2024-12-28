import { Stack } from "@mui/material";
import MarkdownIt from "markdown-it";
import React, { useState } from "react";

// Markdown parser
const mdParser = new MarkdownIt();

export default function PersianPreview() {
  const [markdownText, setMarkdownText] = useState(``);

  return (
    <>
      <Stack
        sx={{
          border: "1px solid #ccc",
          p: "16px",
          borderRadius: "8px",
          bgcolor: "#f9f9f9",
          direction: "rtl",
        }}
        dangerouslySetInnerHTML={{ __html: mdParser.render(markdownText) }}
      />
    </>
  );
}
