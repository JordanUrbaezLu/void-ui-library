import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroCalendar from "./AstroCalendar";

export default {
    title: "Components/AstroCalendar",
    component: AstroCalendar,
} as ComponentMeta<typeof AstroCalendar>;

const Template: ComponentStory<typeof AstroCalendar> = (args) => {
    return (
        <AstroCalendar {...args} />
    )
}

export const Default = Template.bind({});