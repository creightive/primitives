import {Button} from '@creightive/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    children: 'Button'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {},
};

export const Secondary = {
  args: {
    variant: 'secondary'
  },
};

export const Destructive = {
  args: {
    variant: 'destructive'
  },
};

export const Outline = {
  args: {
    variant: 'outline'
  },
};


export const Ghost = {
  args: {
    variant: 'ghost'
  },
};


export const Link = {
  args: {
    variant: 'link'
  },
};

const MagicWandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}  fill="currentColor" viewBox="0 0 256 256" >
    <path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path>
    <path
      d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
  </svg>
)
export const Icon = {
  args: {
    variant: 'outline',
    size: 'sm',
    children: <MagicWandIcon />
  },
};


export const WithIcon = {
  args: {
    children: <>
      <MagicWandIcon/>
      Button
    </>
  },
};


export const Loading = {
  args: {
    disabled: true
  },
};


export const AsChild = {
  args: {},
};



