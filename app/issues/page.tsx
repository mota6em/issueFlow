'use client';
import Link from "next/link";
import React from "react";

const Issues = () => {
  return (
    <>
      <div>Issues page</div>
      <Link href="/issues/new" className="btn btn-primary">Add Issue</Link>
    </>
  );
};

export default Issues;
