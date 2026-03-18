import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings']);

      toast.success('Booking deleted succesfully');
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { mutate, isLoading };
}
