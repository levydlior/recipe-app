import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const CreateAnAccountFormDiv = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 30vh
`;

export const AccountFormTextField = styled(TextField)`
  background-color: #d3d3d3;
`;

export const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
`;
