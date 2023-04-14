import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ButtonText } from "./Index";
import userEvent from "@testing-library/user-event";
import { lightTheme } from "../../../../core/colors/theme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DesignSystem/Atoms/ButtonText",
  component: ButtonText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonText> = (args) => (
  <ButtonText {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  variant: "primary",
  fullWidth: false,
};

Primary.play = async ({ canvasElement }) => {
  let canvas = within(canvasElement);
  let primaryButton = await canvas.getByRole("button", { name: /Button/i });
  await expect(primaryButton.innerText).toBe("Button"); // "버튼 안에 텍스트가 버튼인지 검사 "
  await expect(primaryButton).toHaveStyle(
    `background-color: ${lightTheme.primary}`
  ); // "버튼 안에 텍스트가 버튼인지 검사 "

  const consoleSpy = jest.spyOn(console, "log");
  await userEvent.click(canvas.getByTestId("test-button-text"));
  expect(consoleSpy).toHaveBeenCalledWith("clicked!");
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  label: "Button",
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  label: "Button",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  label: "Button",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  size: "lg",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "primary",
  size: "md",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  size: "sm",
  label: "Button",
};
