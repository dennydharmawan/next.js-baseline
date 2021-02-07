import { Container, Typography } from "@material-ui/core";

import { BoxGrid, BoxGridWrap } from "../components/BoxGrid";
import Layout from "../components/Layout";

export default function index() {
  return (
    <BoxGridWrap>
      <BoxGrid>
        <span>One column default</span>
      </BoxGrid>

      <BoxGrid>
        <span>Half column 1</span>
        <span>Half column 2</span>
      </BoxGrid>

      <BoxGrid>
        <span>3-col 1</span>
        <span>3-col 2</span>
        <span>3-col 3</span>
      </BoxGrid>

      <BoxGrid>
        <span>4-col 1</span>
        <span>4-col 2</span>
        <span>4-col 3</span>
        <span>4-col 4</span>
      </BoxGrid>
    </BoxGridWrap>
  );
}
