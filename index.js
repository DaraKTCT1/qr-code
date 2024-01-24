const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const button = document.getElementById("button");

function generateQrcode (){
    if(qrText.value == ""){
        return;
        qrText.classList.add("translate");
    }else{
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrText.value = "";
        qrText.placeholder = "Next QR Code";
        qrImage.style.display = "block";
    }
   
}
button.addEventListener("click", generateQrcode);