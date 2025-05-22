import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p>Something went wrong.</p>
      <p className="text-gray-500">{error.statusText || error.message}</p>
    </div>
  );
}
