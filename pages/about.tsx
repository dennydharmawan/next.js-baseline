import { NextSeo } from "next-seo";

import Layout from "../components/Layout";

const about = () => {
  return (
    <>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
      />
      <Layout>hello world</Layout>
    </>
  );
};

export default about;
