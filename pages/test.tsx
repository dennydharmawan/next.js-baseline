import { Container, Typography } from "@material-ui/core";

import { FlexGrid, FlexGridWrap } from "../components/FlexGrid";
import Layout from "../components/Layout";

export default function test() {
  return (
    <FlexGridWrap>
      <FlexGrid>
        <span>One column default</span>
      </FlexGrid>

      <FlexGrid>
        <span>Half column 1</span>
        <span>Half column 2</span>
      </FlexGrid>

      <FlexGrid>
        <span>3-col 1</span>
        <span>3-col 2</span>
        <span>3-col 3</span>
      </FlexGrid>

      <FlexGrid>
        <span>4-col 1</span>
        <span>4-col 2</span>
        <span>4-col 3</span>
        <span>4-col 4</span>
      </FlexGrid>
    </FlexGridWrap>
  );
}
