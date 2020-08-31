import React from "react";
import { Button, Input } from "reactstrap";

export const RenderInput = ({ type, placeholder, ...props }) => (
  <Input {...props} className="input" placeholder={placeholder} type={type} />
);

export const RenderButton = ({ color, title, ...props }) => (
  <Button {...props} size="sm" outline color={color}>
    {title}
  </Button>
);
