"use client";
import React from "react";
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
  const onsubmit = async (data: IssueData) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
  };
  return (
    <form
      className="w-6/12 space-y-2"
      onSubmit={handleSubmit((data) => onsubmit(data))}
    >
      <h1 className="text-2xl py-2 font-bold">New Issue</h1>
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

      <button className="btn btn-primary mt-1 hover:border-white">
        Submit New Issue
      </button>
    </form>
  );
};

export default page;
