import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h2>Error Coy!!! Gak Ada Halamannya...</h2>
      <div>{error.statusText || error.message}</div>
    </>
  );
};

export default ErrorPage;
