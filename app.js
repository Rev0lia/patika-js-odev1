const greeting = document.querySelector(".greeting");
const dateElement = document.querySelector(".date");
const date = new Date();
const dayArr = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
];

let userName = prompt("Adınızı Giriniz: ");

if (userName == "" || userName == null) {
    userName = "Anonim";
}

greeting.innerHTML = `Merhaba, <strong>${userName}</strong>! Hoş Geldin!`;
dateElement.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
    dayArr[date.getDay()]
}`;
