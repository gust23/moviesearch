import { toast } from 'react-toastify';

const notifyInput = () =>
  toast.warn('🎥 Please, enter the movie name', {
    position: 'top-center',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
const notifyError = () =>
  toast.error('API failure', {
    position: 'top-center',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });

export { notifyError, notifyInput };
