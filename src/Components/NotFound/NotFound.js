import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h4>PLEASE TRY ANOTHER SITE PATH / URL</h4>
      <button>
        <Link to="/">Back To Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
