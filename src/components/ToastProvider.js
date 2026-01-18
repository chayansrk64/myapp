'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const showInfoToast = (message) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};
