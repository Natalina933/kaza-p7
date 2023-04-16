import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
