import React from "react";

export const Content = ({ tabKey, params, children }) => (
  <>{params.tab === String(tabKey) ? children : null}</>
);
