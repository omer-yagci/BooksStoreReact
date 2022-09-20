import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const mySwal = withReactContent(Swal);

export const SweetAlertsLogin = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Successful Login",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const SweetAlertsError = (error) => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    text: error,
    title: "Something went wrong!",
    timer: 1500,
  });
};

export const SweetAlertsModal = (img, title, amount, currencyCode) => {
  Swal.fire({
    title: title,
    text: amount + currencyCode,
    imageUrl: img,
    imageWidth: 200,
    imageHeight: 200,
  });
};

export const SweetAlertsRegister = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Successful Register",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const SweetAlertsLogOut = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Successful Logout",
    showConfirmButton: false,
    timer: 1500,
  });
};
