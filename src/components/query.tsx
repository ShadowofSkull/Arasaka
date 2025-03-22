"use client";
import Form from "next/form";
import { useState } from "react";

export default function Query() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    e.target.style.height = "auto"; // Reset height
    e.target.style.height = e.target.scrollHeight + "px"; // Set new height
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div id="input" className="">
      <Form
        action={handleSubmit}
        className="flex flex-col justify-center items-center p-4 h-40 "
      >
        <textarea
          value={text}
          onChange={handleChange}
          id="query"
          name="query"
          placeholder="Ask away and Your Desire Product Will Appear"
          className="w-full p-3 rounded-lg border-[1px]  placeholder-gray-400 resize-none drop-shadow-lg"
        />
        <button type="submit" className="bg-red-400 p-2 m-2">
          Submit
        </button>
      </Form>
    </div>
  );
}
