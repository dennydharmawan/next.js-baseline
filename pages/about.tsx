import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "../components/Layout";

const about = () => {
  return <Layout>hello world</Layout>;
};

export default about;
