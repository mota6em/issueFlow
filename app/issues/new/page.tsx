"use client";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const page = () => {
  return (
    <div className="w-6/12 space-y-2">
      <h1 className="text-2xl py-2 font-bold">New Issue</h1>
      <legend className="fieldset-legend text-lg">Title</legend>
      <input
        type="text"
        placeholder="Please enter the title of the issue"
        className="input input-primary w-full border-white/85 focus:outline-white focus:border-white/0"
      />
      <p className="text-lg">Description</p>
      <SimpleMDE className="" placeholder="Please describe the issue" />
      <button className="btn btn-primary mt-1 hover:border-white">
        Submit New Issue
      </button>
    </div>
  );
};

export default page;
