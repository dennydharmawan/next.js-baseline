import { Box } from "@material-ui/core";
import { alpha, experimentalStyled } from "@material-ui/core/styles";

const GridWrap = experimentalStyled(Box)(() => ({
  padding: 'var(--grid-gap)',
}));

const StyledGrid = experimentalStyled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(var(--min-column-width), 1fr))`,
  gridGap: 'var(--grid-gap)',

  '& + .grid': {
    marginTop: 'var(--grid-gap)',
  },
}));

// TODO: is there a better way to do this?
const Grid: React.FC = ({ children }) => {
  return <StyledGrid className="grid">{children}</StyledGrid>;
};

export { GridWrap, Grid };
