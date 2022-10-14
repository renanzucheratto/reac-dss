import { ComponentMeta, Meta, Story } from "@storybook/react";
import { Button } from ".";
import { IButtonComponent } from "./interfaces";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        defaultValue: "primary",
        type: "select",
        values: ["primary", "secondary", "outline"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: Story<IButtonComponent> = (args) => (
  <Button {...args}>Button</Button>
);
