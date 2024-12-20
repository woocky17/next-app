import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeEmails = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="#">David Ortet</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmails;
