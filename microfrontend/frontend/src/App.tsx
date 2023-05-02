import HomePage from "./HomePage";
import { ThemeProvider } from "./theme";
import PagesWrapper from "./PagesWrapper";

function App() {
  return (
    <ThemeProvider>
      <PagesWrapper>
        <HomePage userIsPremium />
      </PagesWrapper>
    </ThemeProvider>
  );
}

export default App;
