import { Box } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

const GridWrap = experimentalStyled(Box)(({ theme }) => ({
  padding: theme.grid.gridGap,
}));

const StyledGrid = experimentalStyled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${theme.grid.minColumnWidth}, 1fr))`,
  gridGap: theme.grid.gridGap,

  '& + .grid': {
    marginTop: theme.grid.gridGap,
  },
}));

const Grid: React.FC = ({ children }) => {
  return <StyledGrid className="grid">{children}</StyledGrid>;
};

export { GridWrap, Grid };
