import React, { useState, useEffect, useRef } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Stack } from "@mui/material";

// Markdown parser
const mdParser = new MarkdownIt();

const TextEditor = ({ dir = "rtl",text }) => {
  const [markdownText, setMarkdownText] = useState("");
  const editorRef = useRef(null);

  // Handle editor change
  const handleEditorChange = ({ text }) => {
    setMarkdownText(text);
    console.log(text)
  };

  // Handle image upload
  const handleImageUpload = async (file) => {
    try {
      // append image url to file
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(`${import.meta.env.VITE_API}v1/pa/files/image`, {
        method: "POST",
        headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
        body: formData,
      });
      const data = await res.json();
      const imageUrl = `${import.meta.env.VITE_API}statics/tmp_image/${
        data?.data?.file_name
      }`;
      return imageUrl; //return image url to text editor
    } catch (error) {
      console.error("Error uploading image:", error);
      return "";
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "500px",
      }}
    >
      <MdEditor
        ref={editorRef}
        value={markdownText}
        style={{ height: "100%", width: "100%", direction: dir }}
        renderHTML={(text) => mdParser.render(markdownText)}
        onChange={handleEditorChange}
        config={{
          view: {
            menu: true,
            md: true,
            html: true,
          },
          onImageUpload: handleImageUpload,
        }}
      />
    </Stack>
  );
};

export default TextEditor;