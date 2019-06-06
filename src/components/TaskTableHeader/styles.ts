import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    padding: 20
  },
  projectField: {
    width: 100
  }
};

export type Classes = Record<keyof typeof styles, string>;
export const withClasses = withStyles(styles);
