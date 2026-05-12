import React from "react";

const NotFound = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <img src="/critic_no_found.svg" alt="404 NOT FOUND" width="300" />
      <h2>Oops! Page Not Found</h2>
    </div>
  );
};

export default NotFound;