import React from "react";

const NotFound = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">404 Not Found</h1>
        <p className="text-muted mb-4">
          {" "}
          Sorry, The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
