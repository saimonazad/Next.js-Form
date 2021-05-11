import device from "../../theme/device";

import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  color:${(props) => props.theme.colors.primaryText};

  @media ${device.laptopMd} {
    flex-direction: row;
    height: 100vh;
    min-height: 900px;
  }
`;
const FormContainer = styled.div`
  flex: 1 1 100%;
  order: 2;
  padding: 3rem 0.9375rem;
  align-self: center;
  h1 {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 1.875rem;
    margin: 0 0 0.5rem;
  }
  .sub__title {
    color: #b3b3b3;
    font-weight: 300;
    margin: 0 0 1.5rem;
    line-height: 1.25rem;
  }
  label {
    display: inline-block;
    margin: 0 0 0.5rem;
  }
  .agreement__label {
    font-size: 16px;
    color: #888;
    padding-left: 20px;
    margin-left: 20px;
    position: absolute;
  }
  .checkbox__group {
    position: relative;
    margin: 1.2rem 0 2rem;
  }
  .checkbox__group label {
    display: block;
    position: relative;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .grid-container {
    display: block;
  }

  @media ${device.mobileC} {
    .content {
      max-width: 540px;
      margin: 0 auto;
    }
  }
  @media ${device.tablet} {
    .content {
      max-width: 720px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "FirstName LastName"
        "Email Email"
        "Phone Website"
        "Password ReTypePassword";
      grid-gap: 10px 25px;
    }
    .Email {
      grid-area: Email;
    }
    .FirstName {
      grid-area: FirstName;
    }
    .LastName {
      grid-area: LastName;
    }
    .Phone {
      grid-area: Phone;
    }
    .Website {
      grid-area: Website;
    }
    .Password {
      grid-area: Password;
    }
    .ReTypePassword {
      grid-area: ReTypePassword;
    }
  }
  @media ${device.laptopMd} {
    flex: 1 1 80%;
    order: 1;
    .row {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
      margin: 0 auto;
    }
    .content {
      max-width: 960px;
    }
  }
  @media ${device.laptop} {
    .content {
      max-width: 1140px;
    }
  }
`;
const Input = styled.input.attrs({ type: "text" })`
  &:focus {
    outline: none !important;
    border: 1px solid #fb771a;
    box-shadow: 0 0 10px #fb771a;
  }
  border: none;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  height: 54px;
  background: #fff;
  display: block;
  width: 100%;
  height: 54px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
`;
const SelectedInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  cursor: pointer;
  width: 0px;
  height: 0px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: #e9e9e9;
  }
  &:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: #fb771a;
  }
  &:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }
`;
const SubmitBtn = styled.input.attrs({ type: "submit" })`
  border: none;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  background: #fb771a;
  border-color: #fb771a;
  padding: 15px 60px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  margin-top: 60px;
  font-weight: 600;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  flex: 1 1 100%;
  order: 1;
  background-image: url("/bg_signup.jpg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;

  @media ${device.laptopMd} {
    flex: 1 1 20%;
    order: 2;
  }
`;

const ErrorText = styled.p`
  color: #fb771a !important;
  margin: 1rem 0 0;
`;

export {
  Wrapper,
  FormContainer,
  ImgContainer,
  ErrorText,
  SubmitBtn,
  Input,
  SelectedInput
}
