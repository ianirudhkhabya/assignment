"use client";

import { useRef, useState } from "react";

import Content from "@/components/Content";

const DashboardPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) return;
    try {
      const data = new FormData();
      data.set("file", imageFile);
      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());

      ref.current && (ref.current.value = "");

      if (res.status === 200) {
        setUploadMessage("Upload successful!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Content>
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold mb-4">Image Upload</h1>
          <form onSubmit={onSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files![0])}
              className="bg-indigo-50 text-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md"
            />
            <button
              type="submit"
              disabled={!imageFile}
              className="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 m-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 cursor-pointer"
            >
              Upload
            </button>
          </form>
          {uploadMessage && <p className="text-green-500">{uploadMessage}</p>}
        </div>
      </div>
    </Content>
  );
};

export default DashboardPage;
