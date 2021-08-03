import React from 'react';

import SideMenu from '../components/SideMenu'

export default {
    title: 'Components/SideMenu',
    component: SideMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <SideMenu {...args} />;

export const PanelColorLight = Template.bind({});
PanelColorLight.args = {
    panelColor: 'light',
    title: 'SideMenu',
    titleColor: 'primary'
};
export const PanelColorDark = Template.bind({});
PanelColorDark.args = {
    panelColor: 'dark',
    title: 'SideMenu',
    titleColor: 'light'
};
export const PanelColorPrimary = Template.bind({});
PanelColorPrimary.args = {
    panelColor: 'primary',
    title: 'SideMenu',
    titleColor: 'light'
};
export const PanelColorSecondary = Template.bind({});
PanelColorSecondary.args = {
    panelColor: 'secondary',
    title: 'SideMenu',
    titleColor: 'light'
};
export const TitleColorLight = Template.bind({});
TitleColorLight.args = {
    panelColor: 'dark',
    title: 'SideMenu',
    titleColor: 'light'
};
export const TitleColorDark = Template.bind({});
TitleColorDark.args = {
    panelColor: 'light',
    title: 'SideMenu',
    titleColor: 'dark'
};
export const TitleColorPrimary = Template.bind({});
TitleColorPrimary.args = {
    panelColor: 'light',
    title: 'SideMenu',
    titleColor: 'primary'
};
export const TitleColorSecondary = Template.bind({});
TitleColorSecondary.args = {
    panelColor: 'light',
    title: 'SideMenu',
    titleColor: 'secondary'
};


