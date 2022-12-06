import { AppShell } from "@mantine/core";
import { FC } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC = () => {
  return (
    <AppShell padding={0} header={<Header />} footer={<Footer />}>
      <Content />
    </AppShell>
  );
};

export default Layout;
