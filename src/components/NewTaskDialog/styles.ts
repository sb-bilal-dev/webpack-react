import { withStyles } from "@material-ui/styles";

export const styles: any = {
  marginBottom10: {
    marginBottom: "10px"
  }
};

export type Classes = Record<keyof typeof styles, string>;
export const withClasses = withStyles(styles);
