import { useState } from 'react';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateEditCabinForm from './CreateCabinForm';

function AddCabin() {
  const [showCabin, setShowCabin] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setShowCabin(!showCabin);
        }}
      >
        Add Cabin
      </Button>
      {showCabin && (
        <Modal
          onClose={() => {
            setShowCabin(false);
          }}
        >
          <CreateEditCabinForm
            onCloseModal={() => {
              setShowCabin(false);
            }}
          ></CreateEditCabinForm>
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
