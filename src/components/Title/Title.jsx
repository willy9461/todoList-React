import React, { Children } from "react";

const Title = ({children}) => {
  return <section style={{ color: "red" }}>
    {children}
  </section>;
};

export default Title;
