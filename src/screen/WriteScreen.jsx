import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AiOutlineClose } from "react-icons/ai";

export default function WriteScreen({ value, onValueChange, title, onBack }) {

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "blockquote"],
      [
        { align: null },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  return (
    <div className="container">
        <AiOutlineClose onClick={onBack} style={{ color: "gray", fontSize: 20 }} />
      <h2 style={{ textAlign: "center", fontSize: 18 }}>
        {title}
      </h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(text) => onValueChange("note", text)}
        modules={modules}
        placeholder="Write here..."
      />
    </div>
  );
}
