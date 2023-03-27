import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderDiv = styled.div`
  border-bottom: solid 1px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 6px;
`;

export const LogOutLink = styled(Link)`
  color: purple;

  &:hover {
    color: gray;
  }
`;
