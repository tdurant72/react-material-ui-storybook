import React from 'react';

import Navbar from "../components/Navbar";

export default {
    title: 'Components/Navbar',
    component: Navbar,
    argTypes: {
        titleColor: { control: 'select' },
        navColor: { control: 'select' },
        navBorder: { control: 'select' },
    },
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

export const Logo = Template.bind({});
Logo.args = {
    logoSrc: 'https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem',
};

export const Title = Template.bind({});
Title.args = {
    title: 'Default title'
}
export const NavBorderLight = Template.bind({});
NavBorderLight.args = {
    navBorder: 'light',
    title: 'Navar',
    titleColor: 'primary',
    navColor: 'dark'
};
export const NavBorderDark = Template.bind({});
NavBorderDark.args = {
    navBorder: 'dark',
    title: 'Navar',
    titleColor: 'dark',
    navColor: 'light'
};
export const NavBorderPrimary = Template.bind({});
NavBorderPrimary.args = {
    navBorder: 'primary',
    title: 'Navar',
    titleColor: 'dark',
    navColor: 'light'
};
export const NavBorderSecondary = Template.bind({});
NavBorderSecondary.args = {
    navBorder: 'secondary',
    title: 'Navar',
    titleColor: 'secondary',
    navColor: 'light'
};
export const TitleColorLight = Template.bind({});
TitleColorLight.args = {
    navBorder: 'secondary',
    title: 'Navar',
    titleColor: 'light',
    navColor: 'dark'
};
export const TitleColorDark = Template.bind({});
TitleColorDark.args = {
    navBorder: 'primary',
    title: 'Navar',
    titleColor: 'dark',
    navColor: 'light'
};
export const TitleColorPrimary = Template.bind({});
TitleColorPrimary.args = {
    navBorder: 'primary',
    title: 'Navar',
    titleColor: 'primary',
    navColor: 'light'
};
export const TitleColorSecondary = Template.bind({});
TitleColorSecondary.args = {
    navBorder: 'secondary',
    title: 'Navar',
    titleColor: 'secondary',
    navColor: 'light'
};
export const NavColorLight = Template.bind({});
NavColorLight.args = {
    navBorder: 'dark',
    title: 'Navar',
    titleColor: 'dark',
    navColor: 'light'
};
export const NavColorDark = Template.bind({});
NavColorDark.args = {
    navBorder: 'secondary',
    title: 'Navar',
    titleColor: 'light',
    navColor: 'dark'
};
export const NavColorPrimary = Template.bind({});
NavColorPrimary.args = {
    navBorder: 'secondary',
    title: 'Navar',
    titleColor: 'light',
    navColor: 'primary'
};
export const NavColorSecondary = Template.bind({});
NavColorSecondary.args = {
    navBorder: 'primary',
    title: 'Navar',
    titleColor: 'light',
    navColor: 'secondary'
};