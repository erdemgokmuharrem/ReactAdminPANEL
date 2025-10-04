import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from './Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const ModalExample = ({ size, title }: { size?: 'sm' | 'md' | 'lg' | 'xl', title?: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        size={size}
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            This is a modal dialog. It can contain any content you want.
          </p>
          <div className="flex justify-end space-x-3">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export const Default: Story = {
  render: () => <ModalExample title="Default Modal" />,
}

export const Small: Story = {
  render: () => <ModalExample title="Small Modal" size="sm" />,
}

export const Large: Story = {
  render: () => <ModalExample title="Large Modal" size="lg" />,
}

export const ExtraLarge: Story = {
  render: () => <ModalExample title="Extra Large Modal" size="xl" />,
}

export const WithoutTitle: Story = {
  render: () => <ModalExample />,
}


