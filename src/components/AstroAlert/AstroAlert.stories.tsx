import { AstroAlert } from "./AstroAlert";

export default {
  component: AstroAlert,
  title: "Components/AstroAlert",
};

export const Error = () => (
  <AstroAlert variant="error">There was an error!</AstroAlert>
);

export const Info = () => (
  <AstroAlert variant="info">Here's some information.</AstroAlert>
);

export const Success = () => (
  <AstroAlert variant="success">That was successful!</AstroAlert>
);

export const Warning = () => (
  <AstroAlert variant="warning">This is a warning!</AstroAlert>
);

export const LongText = () => (
  <AstroAlert>
    I am some very long text for the AstroAlert component!
  </AstroAlert>
);

export const Closeable = () => (
  <AstroAlert closeable variant="info">I am a closeable AstroAlert component!</AstroAlert>
);
