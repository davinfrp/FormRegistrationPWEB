function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Please fill your Name");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nrp"].value == "") {
        alert("Please Fill your NRP");
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Please Fill your Email");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
        alert("Select your Major.");
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["gender"].selectedIndex < 1) {
        alert("Select your Gender.");
        document.forms["formPendaftaran"]["gender"].focus();
        return false;
    }
}