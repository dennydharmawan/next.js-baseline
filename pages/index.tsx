import { Container, Typography } from "@material-ui/core";

import { Grid, GridWrap } from "../components/Grid";
import Layout from "../components/Layout";

export default function index() {
  return (
    <GridWrap>
      <Grid>
        <span>One column default</span>
      </Grid>

      <Grid>
        <span>Half column 1</span>
        <span>Half column 2</span>
      </Grid>

      <Grid>
        <span>3-col 1</span>
        <span>3-col 2</span>
        <span>3-col 3</span>
      </Grid>

      <Grid>
        <span>4-col 1</span>
        <span>4-col 2</span>
        <span>4-col 3</span>
        <span>4-col 4</span>
      </Grid>
    </GridWrap>
  );
}
