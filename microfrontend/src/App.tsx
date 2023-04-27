import HomePage from "./HomePage";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
