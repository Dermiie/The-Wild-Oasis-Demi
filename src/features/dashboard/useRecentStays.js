import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import {
  getBookingsAfterDate,
  getStaysAfterDate,
} from '../../services/apiBookings';

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numOfDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numOfDays).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['stays', `last-${numOfDays}`],
  });

  const confirmedStays = stays?.filter(
    (stays) => stays.status === 'checked-in' || stays.status === 'checked-out',
  );

  return { stays, isLoading, confirmedStays, numOfDays };
}
