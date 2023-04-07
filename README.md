# The Grid
This is an app used for word association game, "The Grid".

- Clone using git.
- Run ```npm install``` to install dependencies.
- Run ```npm start``` to start the development server.

## User guide
Add 5 sets of 4 related words and 5 extra dummy words

(Build in Electron so that it can run as a separate executable?)

## TODO
### Design Specification
- A 5x5 grid of cards is rendered.
- 5 sets of 4 are associated words. 1 set of 5 is unrelated.
- When a card is selected it turns red.
- Select 5 cards in a row. If those 5 are associated, they are "solved".
- Mark them as green and they can no longer be selected.
- If they are not associated, unselect the cards.

### Features to be implemented
- Render a 5x5 grid.
- Selection and solving logic.
- Shuffle cards randomly each time.
- UI to add words before the game starts.
- Inbuilt timer
- Inbuilt scoring (this may also be a separate app/plugin for better integration with Slides)


### Bugs to fix