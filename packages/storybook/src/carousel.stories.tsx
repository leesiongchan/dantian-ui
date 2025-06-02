import type { Meta, StoryObj } from '@storybook/react-vite'

import { Carousel } from '@dantian-ui/react'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic = {
  render: (args) => (
    <Carousel {...args}>
      {new Array(15).fill(null).map((_, index) => (
        <img key={index} src={`https://picsum.photos/seed/${index + 10}/400`} />
      ))}
    </Carousel>
  ),
} satisfies Story
