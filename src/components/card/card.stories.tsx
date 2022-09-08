import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';
import { InputVariant, Input } from '../form';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const DefaultTemplate: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Input
      variant={InputVariant.Radio}
      options={[
        { value: 'fieldA.1', label: 'Field A.1' },
        { value: 'fieldA.2', label: 'Field A.2' },
        { value: 'fieldA.3', label: 'Field A.3' },
      ]}
      label="Field A"
      name="fieldA"
    />
    <Input
      variant={InputVariant.Select}
      options={[
        { value: '', label: '' },
        { value: 'fieldB.1', label: 'Field B.1' },
        { value: 'fieldB.2', label: 'Field B.2' },
        { value: 'fieldB.3', label: 'Field B.3' },
      ]}
      label="Field B"
      name="fieldB"
    />
  </Card>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: {
    label: 'Lorem ipsum dolor sit amet',
    subtitle: 'Velit esse cillum dolore eu fugiat nulla pariatur',
    avatar: 'R',
  },
  headerActions: [
    { label: 'External action', onClick: action('External action') },
    { label: 'Other action', onClick: action('Other action') },
  ],
  primaryFooterAction: { label: 'Envoyer le formulaire' },
  secondaryFooterActions: { label: 'Enregistrer', onClick: action('Enregistrer') },
};
