import * as React from "react";

export interface ErrorModel {
  response: {
    message: string;
  };
  message?: string;
  status?: number;
}

export interface RenderError {
  error: ErrorModel;
}

const RenderError = React.memo(({ error }: RenderError) => {
  return (
    <div>{(error.response && error.response.message) || error.message}</div>
  );
});

export default RenderError;
