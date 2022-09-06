import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => <Input />;
