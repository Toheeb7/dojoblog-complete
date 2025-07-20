import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page not found</h2>
      <p>That page doesn’t exist</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
