import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardUI } from './card';

export default {
  title: 'Card',
  component: CardUI,
} as ComponentMeta<typeof CardUI>;

export const Primary: ComponentStory<typeof CardUI> = () => <CardUI />;
