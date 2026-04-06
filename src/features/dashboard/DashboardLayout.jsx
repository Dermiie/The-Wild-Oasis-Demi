import styled from 'styled-components';
import DashboardFilter from './DashboardFilter';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import Spinner from '../../ui/Spinner';
import Stats from './Stats';
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { stays, isLoading: isLoadingStays, numOfDays } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  console.log('booking', bookings, 'stays', stays);

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner></Spinner>;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={stays}
        numDays={numOfDays}
        cabins={cabins}
      />
      <TodayActivity />

      <DurationChart confirmedStays={stays} />

      <SalesChart bookings={bookings} numOfDays={numOfDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
