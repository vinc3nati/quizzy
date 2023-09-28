## Quizzy 
Contains 5 quiz questions on One Piece Anime related theme.

## Tech Stack
- Next.js
- Tailwind CSS
- Zustand

## Implementation and Logic

- When the app mounts, we fetch the data which is stored in the local `quiz.server.js` file with the help of next api.
- The plus point for using this is that this reduces the total bytes of data needed to be downloaded on the client side.
- Zustand is used for global state management which drastically improves the state update logic.
- Also has Skeleton loader to prevent huge layout shifts when the data is loaded.
- User can only move forward after selecting an answer.
- After answering the 5 quiz questions one can see their result and also play again.
- Result Page is also protected i.e. if one navigate to result page without taking the quiz it will redirect to the quiz page.
- All the components used have their logics fully optimized using eg:- `useMemo` .
