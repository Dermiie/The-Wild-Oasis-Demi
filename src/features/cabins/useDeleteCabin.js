import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export default function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['cabins']);

      toast.success('Cabin deleted succesfully');
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
}
