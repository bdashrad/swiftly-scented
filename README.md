# swiftly-scented

This project is a fun game that allows users to vote on whether a given phrase is the name of a Taylor Swift song or a Bath and Body Works scent.

## Project Structure

- **src/**: Contains the source code for the application.

  - **assets/**: Contains base styles for the application.
    - `base.css`: Base styles including CSS variables for colors and layout.
  - **components/**: Contains Vue components.
    - `HelloWorld.vue`: A component that displays a greeting message.
    - `TheWelcome.vue`: A component that provides information and links to resources related to the Vue ecosystem.
  - **views/**: Contains the views for the application.
    - `GameView.vue`: The view that implements the game logic.
  - **types/**: Contains TypeScript types and interfaces.
    - `index.ts`: Defines types for game phrases and voting results.
  - `main.ts`: The entry point of the application that initializes the Vue app.

- **public/**: Contains public assets.

  - `index.html`: The main HTML file that serves as the entry point for the web application.

- `package.json`: Configuration file for npm, listing dependencies and scripts.

- `tsconfig.json`: Configuration file for TypeScript, specifying compiler options.

- `pnpm-lock.yaml`: Locks the versions of the dependencies used in the project.

## Setup Instructions

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd swift-and-bodyworks
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Run the development server:

   ```sh
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- Users can interact with the game by voting on whether a phrase is a Taylor Swift song or a Bath and Body Works scent.
- The game will display results based on user votes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.
