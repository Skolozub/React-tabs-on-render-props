import React from "react";
import { Header } from "./header";
import { Tab } from "./tab";
import { Body } from "./body";
import { Content } from "./content";

export const Tabs = ({ children }) => <div>{children}</div>;

Tabs.Header = Header;
Tabs.Tab = Tab;
Tabs.Body = Body;
Tabs.Content = Content;
