import { FlexRowContainer } from "../../../.storybook/components/FlexRowContainer";
import { Link } from "./Link";

export default {
  component: Link,
  title: "Components/Link",
};

export const Variant = () => {
  return (
    <FlexRowContainer>
      <Link href="#" variant="primary">
        Primary
      </Link>
      <Link href="#" variant="secondary">
        Secondary
      </Link>
    </FlexRowContainer>
  );
};
