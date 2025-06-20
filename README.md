# Emotion Board App

An interactive, adaptive web application for tracking and visualizing your daily emotions. Built with Next.js, TypeScript, MobX, MUI, Tailwind CSS, and localStorage persistence.

---

## Features

- **Add Emotion**: Add an emotion for the day with a comment. Choose from a set of predefined emotions (Joy, Sadness, Anger, Surprise, Calm).
- **Visual Board**: Emotions are displayed as colorful cards with icons, emotion name, and your comment.
- **Responsive Layout**: 
  - **Desktop**: Cards are shown in a grid.
  - **Mobile**: Cards are shown in a vertical list, with drag-and-drop reordering and swipe-to-delete.
- **Delete Emotion**: 
  - **Desktop**: Remove via a delete button on each card.
  - **Mobile**: Remove by swiping the card left.
- **Drag-and-Drop**: Reorder cards on mobile using drag-and-drop (powered by @hello-pangea/dnd).
- **Persistence**: All emotions are saved in your browser's localStorage and restored on reload.
- **Modern UI**: Built with MUI and Tailwind CSS for a clean, adaptive look.

---

## Tech Stack
- **Next.js**
- **TypeScript**
- **MobX** for state management
- **MUI** (Material UI) for components
- **Tailwind CSS** for utility-first styling
- **@hello-pangea/dnd** for drag-and-drop
- **date-fns** for deterministic date formatting

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## Usage
- Click **"Додати емоцію"** to add a new emotion with a comment.
- On desktop, use the delete button to remove a card.
- On mobile, swipe a card left to delete, or drag to reorder.
- All changes are saved automatically in your browser.

---

## Project Structure
- `src/pages/` — Next.js pages (main app in `index.tsx`)
- `src/store/EmotionStore.ts` — MobX store for emotions
- `src/features/EmotionBoard/` — Board/grid/list of emotion cards
- `src/components/EmotionCard/` — Individual emotion card
- `src/components/AddEmotionModal/` — Modal for adding new emotions
- `src/components/EmotionIcons/` — Icons and color mapping for emotions
- `src/shared/types/emotion.ts` — TypeScript types for emotions

---

## Customization & Extending
- Add more emotion types in `src/shared/types/emotion.ts` and `EmotionIcons`.
- Add statistics, filtering, or theming as needed.

---

## License
MIT
