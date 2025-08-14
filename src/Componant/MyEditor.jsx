import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function MyEditor({ value, onChange }) {
  return (
    <div
      style={{ maxWidth: "800px", margin: "20px auto", borderRadius: "10px" }}
    >
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          onChange(editor.getData());
        }}
      />
    </div>
  );
}
