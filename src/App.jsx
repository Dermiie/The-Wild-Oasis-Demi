import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-weight: 600;
  font-size: 30px;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The wild Oasis</H1>
        <Button onClick={() => alert('checkIn')}>Check In</Button>
        <Button onClick={() => alert('checkOut')}>Check Out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}
export default App;
