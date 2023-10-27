const showAlert = (msg) => {
  alert(msg);
};

const showConfirm = (msg) => {
  return confirm(msg);
};



//Bir modul yapisinda 1 tane default module olur.
export default showAlert;

export { showAlert, showConfirm };
