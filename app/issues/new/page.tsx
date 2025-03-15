"use client";
import React from "react";

const page = () => {
  return (
    <div className="w-6/12 space-y-3">
      <h1 className="text-2xl py-2 font-bold">New Issue</h1>
      <legend className="fieldset-legend text-lg">Title</legend>
      <input
        type="text"
        placeholder="Please enter the title of the issue"
        className="input input-primary w-full focus:border-black/0"
      />
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-lg">Description</legend>
        <input
          type="text"
          className="input input-primary py-10 w-full focus:border-black/0"
          placeholder="Please describe the issue"
        />
        {/* <p className="fieldset-label">Optional</p> */}
      </fieldset>
      <button className="btn btn-primary mt-3 hover:border-white">Submit New Issue</button>
    </div>
  );
};

export default page;
