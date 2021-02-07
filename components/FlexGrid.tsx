import clsx from "clsx";
import { ElementType, ReactNode } from "react";

import { Box } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const FlexGridWrap = styled(Box)(({ theme }) => ({
  padding: theme.grid.gridGap,
}));

type Props = {
  children?: ReactNode;
  className?: string;
  component?: ElementType<any>;
};

const FlexGrid = styled((props: Props) => {
  const { className, ...otherProps } = props;

  return (
    <Box className={clsx([props.className, 'flex-grid'])} {...otherProps} />
  );
})(({ theme }) => ({
  display: 'flex',

  '& > *': {
    flex: '0 1 100%',

    '&:not(:first-of-type)': {
      marginLeft: theme.grid.gridGap,
    },
  },

  [`@media (max-width: calc(${theme.grid.minColumnWidth} * 3))`]: {
    flexWrap: 'wrap',

    ' & > *': {
      margin: `${theme.grid.gridGap} 0 0 !important`,
    },
  },

  [`@media (min-width: calc(${theme.grid.minColumnWidth} * 3))`]: {
    '& + .flex-grid': {
      marginTop: theme.grid.gridGap,
    },
  },
}));

export { FlexGridWrap, FlexGrid };
