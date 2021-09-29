import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  background-color: var(--backgroundColor);
`;

const LoginContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
`;

const LoginBox = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1.5px solid var(--borderColor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 40px;
`;

const SignupBox = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1.5px solid var(--borderColor);
  height: 50px;
`;

const LoginForm = styled.form`
  height: 300px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
`;

const LoginInput = styled.input`
  height: 45px;
  border: solid;
  border-width: 1.5px;
  border-color: var(--borderColor);
  border-radius: 3px;
  background-color: var(--backgroundColor);
  font-size: 16px;
  padding: 15px 0 15px 10px;

  &:first-child {
    margin-bottom: 10px;
  }

  &:focus {
    border-color: #000;
    outline: none;
  }
`;

const Submit = styled.button`
  height: 40px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: var(--submitButton);
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdditionalOptions = styled.div`
  display: flex;
`;

const Login = () => {
  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Container>
      <LoginContainer>
        <LoginBox>
          <Title>Lost and Pound</Title>
          <LoginForm onSubmit={handleSubmit}>
            <LoginInput
              ref={username}
              placeholder="Username"
              type="username"
              required
            />
            <LoginInput
              placeholder="Password"
              type="password"
              minLength="6"
              required
              ref={password}
            />
            <Submit>Log In</Submit>
          </LoginForm>
          <DividerContainer>
            <hr />
            <span>Or</span>
            <hr />
          </DividerContainer>
          <AdditionalOptions>Log in with Google</AdditionalOptions>
        </LoginBox>
        <SignupBox>Don't have an account? Sign up</SignupBox>
      </LoginContainer>
    </Container>
  );
};

export default Login;
