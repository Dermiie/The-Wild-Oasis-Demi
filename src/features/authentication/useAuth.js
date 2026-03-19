import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useAuth() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      navigate('/dashboard');
      console.log('user', data);
      toast.success('User logged in successfully');
    },

    onError: (error) => {
      console.log(error);
      toast.error('Input correct login credentials');
    },
  });

  return { login, isLoading };
}
