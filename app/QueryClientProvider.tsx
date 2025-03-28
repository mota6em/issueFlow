"use client";
import React from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQeryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();
const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQeryClientProvider client={queryClient}>
      {children}
    </ReactQeryClientProvider>
  );
};

export default QueryClientProvider;
