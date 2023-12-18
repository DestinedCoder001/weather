import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message) => toast.success(message);
export const notifyWarning = (message) => toast.warn(message);
export const notifyError = (message) => toast.error(message);
export default function Toast() {

  return (
    <div>
      <ToastContainer
        className="text-center font-semibold rounded-[0.7rem]"
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
