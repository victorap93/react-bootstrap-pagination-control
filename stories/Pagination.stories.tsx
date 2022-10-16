import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PaginationControl, PaginationControlProps } from '../src';
import { useArgs } from '@storybook/addons';

const meta: Meta = {
  title: 'React Bootstrap Pagination Control',
  component: PaginationControl,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PaginationControlProps> = args => {
  const [{ page }, updateArgs] = useArgs()
  return <PaginationControl page={page} changePage={number => updateArgs({ page: number })} {...args} />
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  total: 250,
  limit: 30
};
