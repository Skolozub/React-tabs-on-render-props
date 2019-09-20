import React from "react";
import styled from "styled-components";

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid #e3e3e3;
`;
