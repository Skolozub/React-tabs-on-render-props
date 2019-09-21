import React from "react";

export const Content = ({ tabKey, params, tabsName, children }) => (
  <>{params[tabsName] === String(tabKey) ? children : null}</>
);
