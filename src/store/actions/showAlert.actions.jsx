import Swal from "sweetalert2";

export const checkError = (res) => {
  if (res?.data?.message) {
    Swal.fire({
      icon: "success",
      title: res.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    if (res?.message?.message) {
      Swal.fire({
        icon: "error",
        title: res.message.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: res.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
};
