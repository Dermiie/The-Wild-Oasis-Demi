import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query';
import { updateUserData } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: updatingUser } = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      toast.success('User updated successfully');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, updatingUser };
}
