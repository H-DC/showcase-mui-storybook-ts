import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputVariant } from './input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const RadioTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const SelectTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const TextTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const CheckboxTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Radio = RadioTemplate.bind({});
export const Select = SelectTemplate.bind({});
export const Text = TextTemplate.bind({});
export const Checkbox = CheckboxTemplate.bind({});

Radio.args = {
  variant: InputVariant.Radio,
  options: [
    { value: 'fieldA.1', label: 'Field A.1' },
    { value: 'fieldA.2', label: 'Field A.2' },
    { value: 'fieldA.3', label: 'Field A.3' },
  ],
  label: 'Field A',
  name: 'fieldA',
  value: '',
  onChange: () => {},
};
Select.args = {
  variant: InputVariant.Select,
  options: [
    { value: '', label: '' },
    { value: 'fieldB.1', label: 'Field B.1' },
    { value: 'fieldB.2', label: 'Field B.2' },
    { value: 'fieldB.3', label: 'Field B.3' },
  ],
  label: 'Field B',
  name: 'fieldB',
  value: '',
  onChange: () => {},
};
Text.args = {
  variant: InputVariant.Text,
  label: 'Field C',
  name: 'fieldC',
  value: '',
  onChange: () => {},
};
Checkbox.args = {
  variant: InputVariant.Checkbox,
  options: [
    { value: 'fieldG.1', label: 'Field G.1' },
    { value: 'fieldG.2', label: 'Field G.2' },
    { value: 'fieldG.3', label: 'Field G.3' },
  ],
  label: 'Field G',
  errors: ['Field G is required'],
  name: 'fieldG',
  value: '',
  onChange: () => {},
};
