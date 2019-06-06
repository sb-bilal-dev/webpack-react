import { withStyles } from "@material-ui/styles";

export type Classes = Record<keyof typeof styles, string>;

const styles: any = {
  addButton: {
    float: "right"
  }
};

export const withClasses = withStyles(styles);
