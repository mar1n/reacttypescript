import React from "react";
import Page from "./Page.component";

export default {
  component: Page,
  title: "Templates|Pages",
  exludeStories: /.*Data$/,
};

export const WebPage = () => (
  <Page>
    <p>Page Content</p>
  </Page>
);
