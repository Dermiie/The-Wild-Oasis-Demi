import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';
import CabinTableOperation from '../features/cabins/CabinTableOperation';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation></CabinTableOperation>
      </Row>
      <Row type="vertical">
        <CabinTable></CabinTable>
        <div>
          <AddCabin></AddCabin>
        </div>
      </Row>
    </>
  );
}

export default Cabins;
