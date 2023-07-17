// import * as React from 'react';
const Html = require("@react-email/html");
const Button = require("@react-email/button");

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}
