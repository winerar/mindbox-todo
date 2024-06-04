import { FC } from 'react';
import './App.css';
import { Typography } from "./components"

const App: FC = () => {
  return (
    <main>
      <Typography tag="h1">todos</Typography>
      <Typography tag="h2">todos</Typography>
      <Typography tag="h3">todos</Typography>
      <Typography tag="p">todos</Typography>
      <Typography tag="span">todos</Typography>
    </main>
  );
}

export default App;
