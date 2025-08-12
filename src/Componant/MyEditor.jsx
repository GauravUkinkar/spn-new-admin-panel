import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function MyEditor() {
  const [data, setData] = useState("");

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto" }}>
      <h2>Simple CKEditor</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Type something...</p>"
        onChange={(event, editor) => {
          const newData = editor.getData();
          setData(newData);
        }}
      />
      <div
        style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}
      >
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </div>
  );
}
