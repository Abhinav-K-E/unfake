import React, { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import "./FileTab.scss";
import Loader from "../../../pages/Loader/Loader";

const FileTab = () => {
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");

  const fileInputRef = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*, video/*, .gif", // Accept images, videos, and GIFs
    multiple: false, // Allow only one file to be uploaded
  });

  async function uploadFile() {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoader(true);
      const response = await fetch(
        "https://e4d6-2a09-bac5-3b1f-1a82-00-2a4-2.ngrok-free.app/file/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);
      setResult(result);
      setLoader(false);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    // Now you can handle uploading the file formData to your server
  }

  return (
    <div className="tab-content">
      {loader ? (
        <Loader />
      ) : (
        <div className="upload-container">
          <div className="preview-container">
            {file && (
              <div>
                {file.type.startsWith("image/") ? (
                  <img
                    className="preview"
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                  />
                ) : file.type.startsWith("video/") ? (
                  <video controls className="preview video-preview">
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                  </video>
                ) : file.type === "image/gif" ? (
                  <img
                    className="preview"
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                  />
                ) : (
                  <p>Unsupported file type</p>
                )}
              </div>
            )}
            {!file && (
              <div {...getRootProps()} className="upload-preview-grp">
                <input {...getInputProps()} />
                {/* Your upload SVG icon and text here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={100}
                  height={100}
                  fill="none"
                >
                  <path
                    fill="#007AFF"
                    d="M80.625 41.833C77.792 27.458 65.167 16.667 50 16.667c-12.042 0-22.5 6.833-27.708 16.833C9.75 34.833 0 45.458 0 58.333c0 13.792 11.208 25 25 25h54.167C90.667 83.333 100 74 100 62.5c0-11-8.542-19.917-19.375-20.667M58.333 54.167v16.666H41.667V54.167h-12.5l19.375-19.375a2.063 2.063 0 0 1 2.958 0l19.333 19.375z"
                  />
                </svg>
                <p>Drag & drop a file here</p>
              </div>
            )}
          </div>
          <div className="create-btn" onClick={uploadFile}>
            Upload
          </div>
        </div>
      )}
    </div>
  );
};

export default FileTab;
