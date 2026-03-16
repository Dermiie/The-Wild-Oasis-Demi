import CabinRow from './CabinRow';
import Spinner from '../../ui/Spinner';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function CabinTable() {
  const { isLoading, cabins, error } = useCabins();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filteredValue = searchParams.get('discount') || 'all';

  //FILTER CABINS
  let filteredCabins;

  if (filteredValue === 'all') filteredCabins = cabins;

  if (filteredValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  if (filteredValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  //SORT CABINS

  const sortBy = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortBy.split('-');

  const modifier = direction === 'asc' ? 1 : -1;

  const sortedCabins = [...filteredCabins].sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  console.log(field, modifier);
  // if (isLoading) return <Spinner></Spinner>;

  return (
    <Menus>
      <Table columns={'0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'}>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id}></CabinRow>}
        ></Table.Body>
        {/* {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id}></CabinRow>
      ))} */}
      </Table>
    </Menus>
  );
}

export default CabinTable;
