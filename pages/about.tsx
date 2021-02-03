import { NextSeo } from "next-seo";

import { Box } from "@material-ui/core";

import Layout from "../components/Layout";

const about = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            boxShadow: 2,
            m: 1,
            p: 1,
            width: '8rem',
            height: '5rem',
          }}
        >
          hello world
        </Box>
      </Layout>
    </>
  );
};

export default about;
