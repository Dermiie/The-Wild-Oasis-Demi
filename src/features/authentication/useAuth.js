import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useAuth() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate('/dashboard', { replace: true });
      queryClient.setQueryData[('user', user)];
      toast.success('User logged in successfully');
    },

    onError: (error) => {
      console.log(error);
      toast.error('Input correct login credentials');
    },
  });

  return { login, isLoading };
}
