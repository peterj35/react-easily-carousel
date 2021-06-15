import "./App.css";
import Carousel from "./lib";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>Demo</h1>
      <StyledCarousel>
        <div>Elem 1</div>
        <div>Elem 2</div>
        <div>Elem 3</div>
        <img src="https://via.placeholder.com/150" alt="ph" />
      </StyledCarousel>
    </div>
  );
}

const StyledCarousel = styled(Carousel)`
  max-width: 500px;
  border: 1px solid red;
`;

export default App;
