import React from 'react';
import { colors } from "../styles/ColorStyles";
import { Button } from '../components/Button';
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: 'select' },
    type: { control: { type: 'color' } },
    txt: { control: { type: 'color' } },
    bd: { control: { type: 'color' } }
  },

};

const Template = (args) => <Button {...args}
//  colors object found in /styles.ColorStyles
/>;

export const Primary = Template.bind({});
Primary.args = {
  type: colors.primary["500"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  label: 'Button',
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  type: colors.neutral["50"],
  txt: colors.primary["500"],
  bd: colors.primary["500"],
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: colors.secondary["500"],
  txt: colors.neutral["50"],
  bd: colors.secondary["500"],
  label: 'Button',
};
export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  type: colors.neutral["50"],
  txt: colors.secondary["500"],
  bd: colors.secondary["500"],
  label: 'Button',
};
export const Small = Template.bind({});
Small.args = {
  type: colors.primary["500"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  size: 'small',
  label: 'Button',
};
export const Medium = Template.bind({});
Medium.args = {
  type: colors.primary["500"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  size: 'medium',
  label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
  type: colors.primary["500"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  size: 'large',
  label: 'Button',
};

//figma url: https://www.figma.com/file/9wH6FYWxTjmD3NHIKcaCWP/Figma-crash-course?node-id=24%3A138