import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from '../src';

const meta: Meta = {
  title: 'React Bootstrap Pagination',
  component: Pagination,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PaginationProps> = args => <Pagination {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  page: 1,
  total: 250,
  limit: 30,
  changePage: (number) => {
    console.log("Change to page " + number)
  }
};
