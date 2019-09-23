import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { encodeGetParams } from "../functions";

export const Tab = ({
  tabKey,
  params,
  location,
  withparams,
  tabsName,
  setTab,
  className,
  children
}) => {
  const isActive = params[tabsName] === String(tabKey);
  const to = `${location.pathname}${encodeGetParams({
    ...params,
    [tabsName]: tabKey
  })}`;
  const onClick = () => setTab(tabKey);

  const tabProps = {
    className,
    isActive,
    ...(withparams ? { as: Link, to } : { onClick })
  };

  return <StyledTab {...tabProps}>{children}</StyledTab>;
};

const StyledTab = styled.div`
  display: flex;
  padding: 0 20px 10px 20px;
  color: #000;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  outline: none;
  transition: 0.3s all;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #1aac50;
    border-bottom: 1px solid #1aac50;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 700;
      border-bottom: 1px solid #1aac50;

      &:hover {
        color: #1d1f20;
      }
    `}
`;
