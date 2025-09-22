# World Cup Players Table

A beautifully designed React TypeScript component for displaying World Cup player statistics with advanced features like sorting, filtering, and search capabilities.

## Features

- ✨ **Beautiful Design**: Modern UI with gradients, hover effects, and responsive design
- 🔍 **Global Search**: Search across all player data
- 📊 **Column Sorting**: Click headers to sort by any column
- 🎨 **Position-based Styling**: Different colors for Goalkeeper, Defender, Midfielder, Forward
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- ⚡ **TypeScript**: Fully typed with TypeScript for better development experience
- 📚 **Storybook**: Interactive component documentation and testing

## Technologies Used

- **React 19** - Latest React with modern features
- **TypeScript 4.9** - Type safety and better DX
- **TanStack Table v8** - Powerful table functionality
- **Storybook 9** - Component development and documentation
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd world-cup
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running Storybook

To view and interact with the component in Storybook:

```bash
npm run storybook
```

This will open Storybook at [http://localhost:6006](http://localhost:6006).

## Component Usage

### Basic Usage

```tsx
import { WorldCupPlayersTable, Player } from './components/WorldCupPlayersTable';

const players: Player[] = [
  {
    id: 1,
    name: 'Lionel Messi',
    country: 'Argentina',
    position: 'Forward',
    age: 36,
    club: 'Inter Miami',
    goals: 7,
    assists: 3,
    appearances: 7,
    marketValue: 35000000,
  },
  // ... more players
];

function App() {
  return (
    <div>
      <WorldCupPlayersTable data={players} />
    </div>
  );
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `data` | `Player[]` | Yes | Array of player objects to display |
| `className` | `string` | No | Additional CSS classes for styling |

### Player Interface

```tsx
interface Player {
  id: number;
  name: string;
  country: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  age: number;
  club: string;
  goals: number;
  assists: number;
  appearances: number;
  marketValue: number; // in euros
}
```

## Features in Detail

### Sorting
- Click any column header to sort
- Click again to reverse sort order
- Visual indicators show current sort direction

### Search
- Global search across all fields
- Real-time filtering as you type
- Case-insensitive search

### Responsive Design
- Adapts to different screen sizes
- Optimized for mobile viewing
- Horizontal scroll for smaller screens

### Position Styling
- **Goalkeeper**: Yellow badge
- **Defender**: Green badge  
- **Midfielder**: Blue badge
- **Forward**: Red badge

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run storybook` - Starts Storybook development server
- `npm run build-storybook` - Builds Storybook for production

## Project Structure

```
src/
├── components/
│   ├── WorldCupPlayersTable.tsx    # Main table component
│   ├── WorldCupPlayersTable.css    # Component styles
│   └── index.ts                    # Component exports
├── data/
│   ├── samplePlayers.ts            # Sample data
│   └── index.ts                    # Data exports
├── stories/
│   └── WorldCupPlayersTable.stories.ts  # Storybook stories
├── App.tsx                         # Main app component
├── App.css                         # App styles
└── index.tsx                       # App entry point
```

## Customization

The component is highly customizable through CSS classes. You can override styles by targeting the following classes:

- `.world-cup-table-container` - Main container
- `.world-cup-table` - Table element
- `.table-header-cell` - Header cells
- `.table-row` - Table rows
- `.position-*` - Position badges
- `.stat-*` - Statistic badges

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- TanStack Table for the powerful table functionality
- React team for the amazing framework
- Storybook team for the excellent development tools
