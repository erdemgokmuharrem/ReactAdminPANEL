import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is a default card',
    className: 'p-6',
  },
}

export const Outlined: Story = {
  args: {
    children: 'This is an outlined card',
    variant: 'outlined',
    className: 'p-6',
  },
}

export const Elevated: Story = {
  args: {
    children: 'This is an elevated card',
    variant: 'elevated',
    className: 'p-6',
  },
}

export const WithContent: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
        <p className="text-gray-600 mb-4">This is a card with more detailed content.</p>
        <button className="btn btn-primary">Action</button>
      </div>
    ),
  },
}


