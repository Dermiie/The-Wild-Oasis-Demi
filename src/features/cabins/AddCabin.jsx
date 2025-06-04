import { useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinFormV1';

function AddCabin() {
  const [showCabin, setShowCabin] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowCabin(!showCabin);
        }}
      >
        Add Cabin
      </Button>
      {showCabin && <CreateCabinForm></CreateCabinForm>}
    </>
  );
}

export default AddCabin;
