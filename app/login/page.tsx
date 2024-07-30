import React from "react";
import LoginForm from "../ui/login-form";
import Container from "../ui/container";
import NavBar from "../ui/navbar";

export default function Page() {
  return (
    <Container className="">
      <NavBar />
      <LoginForm className="mx-auto" />
    </Container>
  );
}
