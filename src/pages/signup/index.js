import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const FormContainer = styled.div`
  flex: 1 1 80%;
`;
const ImgContainer = styled.div`
  flex: 1 1 20%;
  background-image: url("/bg_signup.jpg");
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function signup() {
  return (
    <Wrapper>
      <FormContainer>1</FormContainer>
      <ImgContainer>2</ImgContainer>
    </Wrapper>
  );
}
