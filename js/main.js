window.onload = function () {
  setTimeout(S1MacForm, 16000);
  setTimeout(S1Phone, 16500);
  setTimeout(S1Phone, 16500);
  setTimeout(S1PhoneCall, 20000);
}

function S1MacForm() {
  window.S1Mac = document.querySelector('.macbookContactForm');
  S1Mac.classList.add('sfipeToRith');
  //setTimeout("S1Mac.style.display='none'", 3000);
}

function S1Phone() {
  window.phone = document.querySelector('.phone');
  window.phoneCall = document.querySelector('.phoneCall');
  phone.classList.add('sfipeToRith');
}

function S1PhoneCall() {
  window.phoneCall = document.querySelector('.phoneCall');
  window.vibroPhone = document.querySelector('.vibroPhone');
  phoneCall.classList.remove('sfipeToRith');
  phoneCall.style.display = 'block'; //
  phoneCall.style.left = '15vw';
  phone.style.display = 'none';
  vibroPhone.innerHTML = '<audio src="audio/vibracii.mp3" type="audio/mp3" autoplay loop></audio>';
}

var btnCallPhone = document.getElementById('call').onclick = function () {
  vibroPhone.innerHTML = '';
  alert('Спасибо за вам ответ!');
};
var btnBckCall = document.getElementById('bckCall').onclick = function () {
  vibroPhone.innerHTML = '';
  phoneCall.style.display = 'none';
  phone.classList.remove('sfipeToRith');
  phone.style.left = '15vw';
  phone.style.display = 'block';
  setTimeout(messagePhone, 2000);
}

function messagePhone() {
  window.messagePhone = document.querySelector('.phoneMessages');
  messagePhone.style.left = '15vw';
  vibroPhone.innerHTML = '<audio src="audio/SMS.mp3" type="audio/mp3" autoplay></audio>';
  setTimeout(backScrineOff, 6000);
  setTimeout(backScrineOn, 10500);
  setTimeout(reCall, 11000);
  setTimeout(S1PhoneCall, 11000);
}

function backScrineOff() {
  window.back20minit = document.querySelector('.blockScrone');
  back20minit.style.display = 'block';
  back20minit.classList.add('showTo');
  messagePhone.style.display='none';
}
function backScrineOn() {
  back20minit.style.display = 'none';
  back20minit.classList.remove('showTo');
}

function reCall(){
  phone.style.display='block';
  messagePhone.style.display='none';
  
}