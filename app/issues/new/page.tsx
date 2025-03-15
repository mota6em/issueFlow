"use client";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IssueData {
  title: string;
  description: string;
}
const page = () => {
  const { register, handleSubmit, control } = useForm<IssueData>();
  const router = useRouter();
  const [error, setError] = useState("");
  const onsubmit = async (data: IssueData) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <>
      <form
        className="w-6/12 space-y-2"
        onSubmit={handleSubmit((data) => onsubmit(data))}
      >
        <h1 className="text-2xl py-2 font-bold">New Issue</h1>
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <legend className="fieldset-legend text-lg">Title</legend>
        <input
          {...register("title")}
          type="text"
          placeholder="Please enter the title of the issue"
          className={classNames({
            "border-gray-300": true,
            "w-full": true,
            "p-2": true,
            border: true,
            rounded: true,
          })}
        />
        <p className="text-lg">Description</p>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <SimpleMDE
              {...field}
              className={classNames({
                "border-gray-300": true,
                "w-full": true,
                "p-2": true,
                border: true,
                rounded: true,
              })}
              placeholder="Please describe the issue"
            />
          )}
        />

        <button
          className={classNames({
            "btn  mt-1 hover:border-white": true,
            "btn-primary": error === "",
            "btn-error": error !== "",
          })}
        >
          Submit New Issue
        </button>
      </form>
    </>
  );
};

export default page;
