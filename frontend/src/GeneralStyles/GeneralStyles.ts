import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const GeneralAppButton = styled(Button)`
  text-transform: none !important;
  background-color: #5d9c59 !important;
  color: white !important;
  @media only screen and (min-width: 768px) {
    margin-top: 10px !important;
  }
`;

export const AccountFormDiv = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 30vh
`;

export const AccountFormTextField = styled(TextField)`
  background-color: #d3d3d3;
  @media only screen and (min-width: 768px) {
    margin-top: 10px !important;
    margin-bottom: 5px !important;
  }
`;

export const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
`;
