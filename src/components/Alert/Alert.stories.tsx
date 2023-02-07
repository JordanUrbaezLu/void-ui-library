import { Alert } from "./Alert";

export default {
  component: Alert,
  title: "Components/Alert",
};

export const Error = () => (
  <Alert variant="error">There was an error!</Alert>
);

export const Info = () => (
  <Alert variant="info">Here's some information.</Alert>
);

export const Success = () => (
  <Alert variant="success">That was successful!</Alert>
);

export const Warning = () => (
  <Alert variant="warning">This is a warning!</Alert>
);

export const LongText = () => (
  <Alert>I am some very long text for the Alert component!</Alert>
);

export const Closeable = () => (
  <Alert closeable variant="info">
    I am a closeable Alert component!
  </Alert>
);
