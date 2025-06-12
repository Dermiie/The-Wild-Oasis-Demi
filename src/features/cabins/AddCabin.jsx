import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CabinTable from './CabinTable';
import CreateEditCabinForm from './CreateCabinForm';

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens={'modal'}>
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name={'modal'}>
          <CreateEditCabinForm></CreateEditCabinForm>
        </Modal.Window>

        <Modal.Open opens={'table'}>
          <Button>Open Table</Button>
        </Modal.Open>
        <Modal.Window name={'table'}>
          <CabinTable></CabinTable>
        </Modal.Window>
      </Modal>
    </>
  );
}

// const [showCabin, setShowCabin] = useState(false);
// return (
//   <div>
//     <Button
//       onClick={() => {
//         setShowCabin(!showCabin);
//       }}
//     >
//       Add Cabin
//     </Button>
//     {showCabin && (
//       <Modal
//         onClose={() => {
//           setShowCabin(false);
//         }}
//       >
//         <CreateEditCabinForm
//           onCloseModal={() => {
//             setShowCabin(false);
//           }}
//         ></CreateEditCabinForm>
//       </Modal>
//     )}
//   </div>
// );

export default AddCabin;
