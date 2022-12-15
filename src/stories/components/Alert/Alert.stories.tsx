import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert, {AlertProps} from '.';

export default {
    title: 'Alert',
    component: Alert,
    description: 'This is Jorge'
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}></Alert>

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    title: 'Did you know?',
    description: 'you can learn React + typescript + storybook',
};

export const Error = Template.bind({});
Error.args = {
    type: 'error',
    title: 'Ooops!',
    description: 'you can learn React + typescript + storybook',
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    title: 'Careful!',
    description: 'you can learn React + typescript + storybook',
};