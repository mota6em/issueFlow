"use client";
import React, { useState } from "react";
import "easymde/dist/easymde.min.css";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { string, z } from "zod";
import { IssueSchema } from "@/app/localTSfiles/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage, Spinner } from "@/app/components/index";
type IssueData = z.infer<typeof IssueSchema>;
import dynamic from "next/dynamic";
import { Issue } from "@prisma/client";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface Props {
  issue?: Issue;
}

const IssueForm = ({ issue } = Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueData>({
    resolver: zodResolver(IssueSchema),
  });
  const [subbmitting, setSubmitting] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const onsubmit = async (data: IssueData) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <div className="w-full flex justify-center">
      <form
        className="w-full md:w-6/12 space-y-2"
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
          defaultValue={issue?.title}
          placeholder="Please enter the title of the issue"
          className={classNames({
            "border-gray-300": true,
            "w-full": true,
            "p-2": true,
            border: true,
            rounded: true,
          })}
        />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <p className="text-lg">Description</p>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <SimpleMDE
              {...field}
              value={issue?.description}
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
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <button
          className={classNames({
            "btn  mt-1 hover:border-white": true,
            "btn-primary": error === "",
            "btn-error": error !== "",
          })}
          disabled={subbmitting}
        >
          Submit New Issue {subbmitting && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
