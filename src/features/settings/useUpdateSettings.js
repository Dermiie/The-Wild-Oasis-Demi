import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting } from '../../services/apiSettings';
import toast from 'react-hot-toast';

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSettingApi, isLoading: isEditing } = useMutation({
    mutationFn: updateSetting,

    onSuccess: () => {
      toast.success('Setting updated successfully');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, updateSettingApi };
}
