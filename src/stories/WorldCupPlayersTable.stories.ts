import type { Meta, StoryObj } from '@storybook/react';
import { WorldCupPlayersTable } from '../components/WorldCupPlayersTable';
import { samplePlayers } from '../data/samplePlayers';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof WorldCupPlayersTable> = {
  title: 'Components/WorldCupPlayersTable',
  component: WorldCupPlayersTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'A beautifully designed table component for displaying World Cup player statistics with sorting, filtering, and search capabilities.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: {
      description: 'Array of player objects to display in the table',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS classes to apply to the table container',
      control: { type: 'text' },
    },
  },
  args: {
    data: samplePlayers,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    data: samplePlayers,
  },
};

export const WithCustomClass: Story = {
  args: {
    data: samplePlayers,
    className: 'custom-table-style',
  },
};

export const SmallDataset: Story = {
  args: {
    data: samplePlayers.slice(0, 5),
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
  },
};

export const SinglePlayer: Story = {
  args: {
    data: [samplePlayers[0]],
  },
};

// Story with only forwards
export const ForwardsOnly: Story = {
  args: {
    data: samplePlayers.filter(player => player.position === 'Forward'),
  },
};

// Story with only midfielders
export const MidfieldersOnly: Story = {
  args: {
    data: samplePlayers.filter(player => player.position === 'Midfielder'),
  },
}; 