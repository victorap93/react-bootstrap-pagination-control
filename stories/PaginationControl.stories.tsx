import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { PaginationControl, PaginationControlProps } from '../src';

const meta: Meta = {
  title: 'React Bootstrap Pagination Control',
  component: PaginationControl,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PaginationControlProps> = args => {
  const [{ }, updateArgs] = useArgs()

  return <PaginationControl
    {...args}
    changePage={number => updateArgs({ page: number })}
  />
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  total: 250,
  limit: 30
};

export const Last = Template.bind({});

Last.args = {
  total: 250,
  limit: 30,
  next: false,
  last: true
};

export const Ellipsis = Template.bind({});

Ellipsis.args = {
  total: 250,
  limit: 30,
  ellipsis: 1
};
