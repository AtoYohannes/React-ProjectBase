import React from "react";
import { Content, EmptyLayoutHeader } from "./index";

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-background" {...restProps}>
    <Content fluid>
      <EmptyLayoutHeader />
      <div className="m-3 cr-app-body">{children}</div>
    </Content>
  </main>
);

export default EmptyLayout;
