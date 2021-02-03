import { Box } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

const FlexGridWrap = experimentalStyled(Box)(({ theme }) => ({
  padding: theme.grid.gridGap,
}));

const StyledFlexGrid = experimentalStyled(Box)(({ theme }) => ({
  display: 'flex',
  border: '1px solid red',

  '& > *': {
    flex: '0 1 100%',

    '&:not(:first-child)': {
      marginLeft: theme.grid.gridGap,
    },
  },

  [`@media (max-width: calc(${theme.grid.minColumnWidth} * 3))`]: {
    flexWrap: 'wrap',
    backgroundColor: 'red',

    ' & > *': {
      margin: `${theme.grid.gridGap} 0 0 !important`,
    },
  },

  [`@media (min-width: calc(${theme.grid.minColumnWidth} * 3))`]: {
    backgroundColor: 'red',

    '& + .flex-grid': {
      marginTop: theme.grid.gridGap,
    },
  },
}));

const FlexGrid: React.FC = ({ children }) => {
  return <StyledFlexGrid className="flex-grid">{children}</StyledFlexGrid>;
};

export { FlexGridWrap, FlexGrid };
