import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Error404 from "../components/errors/Error404";
import ServerError from "../components/errors/ServerError";

const ErrorPage = () => {
  const error = useRouteError();
  return <>{isRouteErrorResponse(error) ? <Error404 /> : <ServerError />}</>;
};

export default ErrorPage;
