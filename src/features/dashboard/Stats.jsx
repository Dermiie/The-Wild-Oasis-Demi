import {
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabins }) {
  // console.log(bookings, confirmedStays);
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkIns = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabins.length);

  return (
    <>
      <Stat
        title={'bookings'}
        color={'blue'}
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      ></Stat>
      <Stat
        title={'Sales'}
        color={'green'}
        icon={<HiOutlineCurrencyDollar />}
        value={formatCurrency(sales)}
      ></Stat>
      <Stat
        title={'Check Ins'}
        color={'indigo'}
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      ></Stat>
      <Stat
        title={'Occupancy Rate'}
        color={'yellow'}
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      ></Stat>
    </>
  );
}

export default Stats;
