import { Story } from "@storybook/react";
import * as React from "react";
import {
  AstroSideNavigation
} from "./AstroSideNavigation";
import { AstroSideNavigationSection } from "./AstroSideNavigationSection";
import { AstroSideNavigationSectionItem } from "./AstroSideNavigationSectionItem";

export default {
  component: AstroSideNavigation,
  title: "Components/AstroSideNavigation",
};

export const Default = () => {
  return (
    <AstroSideNavigation>
      <AstroSideNavigationSection name="Components">
        <AstroSideNavigationSectionItem>
          AstroButton
        </AstroSideNavigationSectionItem>
        <AstroSideNavigationSectionItem>
          AstroCheckbox
        </AstroSideNavigationSectionItem>
      </AstroSideNavigationSection>
      <AstroSideNavigationSection name="Other Components">
        <AstroSideNavigationSectionItem>
          AstroPopover
        </AstroSideNavigationSectionItem>
        <AstroSideNavigationSectionItem>
          AstroTextField
        </AstroSideNavigationSectionItem>
      </AstroSideNavigationSection>
    </AstroSideNavigation>
  );
};

Default.parameters = {
    layout: "fullscreen",
  };
