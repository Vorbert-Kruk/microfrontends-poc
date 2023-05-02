import Navbar from "./Navbar";
import HomePage from "./HomePage";
import styled from "styled-components";

const PageWrapper = styled.main`
  padding: 16px;
`;

function App() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    </>
  );
}

export default App;
