# TECH FOR MOBILE APPLICATIONS

## APP NAME - OSSWO
## TEAM MEMBERS -   
                  1) Suraj Venna
                  2) Zaheer Akmal Shaik
                  3) Chakravarthi Maddi

## Application Overview- 

Our application builds a random crossword puzzle.Each level has four distinct phrases and has 4 buttons to do the functions of the app.

Firstly, we create a folder in our system and named it is puzzle. Now we have opened the vs code and opened this puzzle folder and we click a command to create the react native application with th  name of CrosswordPuzzle.
The command is :
```
npx create-expo-app CrosswordPuzzle
```

To move into the directory of project anc do the coding, click ``` cd CrosswordPuzzle ``` where cd stands for change directory.

Now, to design our app and how it has to look we need app.js which is there in vs code on left side . We need CrosswordGrid.js to define how our puzzlesin the app looks like,So we have to create a file CrosswordGrid.js.

The app. js code and CrosswordGrid.js screenshots in vs code -

![app.js](screenshots/t1.jpeg)
Here's a breakdown of the code:

HomeScreen Component: Manages the UI for user authentication, including login and sign-up forms.
App Component: Main component managing the game state, including whether the game has started, crossword data, and user information. Handles user authentication logic.
useState Hook: Used in both components to manage state within functional components.
CrosswordGrid Component: Renders the crossword puzzle grid based on provided data.
User Authentication: Functions handleLogin and handleSignUp validate user input and authenticate users.
Styling: StyleSheet.create defines styles for UI elements.
Exporting Default: App component is exported as the default entry point of the application.

![CrosswordGrid.js](screenshots/t2.jpeg)

Here's a breakdown of the code:

Component Purpose: CrosswordGrid manages the crossword puzzle interface.
User Input Handling: Manages user input for filling in crossword cells.
Puzzle Generation: Generates a new puzzle grid based on provided data.
Answer Verification: Checks if the user's input matches the correct solution.
Grid Reset: Resets the grid to its initial state.
Puzzle Solving: Reveals the correct solution to the puzzle.
Dynamic Rendering: Renders the grid and clues based on the crossword data provided.

we have update few dependencies in package.json 
so, the package.json looks like this -

![package.json](screenshots/t2.jpeg)


