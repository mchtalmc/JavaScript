const bsOffcanvas = new bootstrap.Offcanvas("#privacyOffCanvas");
const isPrivacyPolicyAccepted = localStorage.getItem("privacy-poicy");

if (!isPrivacyPolicyAccepted) {
  bsOffcanvas.show();
}

document.getElementById("btnAccept").addEventListener("click", () => {
  localStorage.setItem("privacy-poicy", true);
  bsOffcanvas.hide();
});
