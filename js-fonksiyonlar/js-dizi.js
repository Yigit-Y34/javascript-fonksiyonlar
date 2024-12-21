/*let sayilar = [10,20,30,40];
let karisik = ["Merhaba",25,true];

let meyveler = ["Elma", "Armut"];
meyveler.push("Çilek", "Kivi");
console.log(meyveler);

let sebzeler = ["Domates", "Biber", "Patlıcan"];
let silinen = sebzeler.pop();
console.log(sebzeler);
console.log(silinen);

let sayilar = [10, 20, 30, 40, 50];
let yeniDizi = sayilar.slice(1,4);
console.log(yeniDizi);
console.log(sayilar);

let diller = ["Python", "JavaScript", "C++", "Java"];
diller.splice(1, 2);
console.log(diller);

let oyunlar = ["CS:GO", "Dota"];
oyunlar.splice(1, 0, "Valorant", "Overwatch");
console.log(oyunlar);

let kitaplar = ["Harry Potter", "Küçük Prens"];
console.log(kitaplar);
let eklenen = kitaplar.push("Assasin's Creed Yoldaşlık", "Metro")
console.log(kitaplar);
let silinen = kitaplar.pop();
console.log(silinen);
let secilen = kitaplar.slice(0, 2);
console.log(secilen);
kitaplar.splice(1, 0, "Metro");
console.log(kitaplar);

let meyveler = ["Elma", "Armut", "Kiraz"];
for (let i = 0; i < meyveler.length; i++) {
    console.log(meyveler[i]);
}

let dizi = [10, 21, 30, 45, 50];
let ciftSayilar = [];
for (let i = 0; i <= dizi.length; i++) {
    let sayi = dizi[i]
    if (sayi % 2 == 0) {
        ciftSayilar.push(sayi);
    }
}

console.log(ciftSayilar);

let diller = ["Python", "JavaScript", "C++", "Java", "yuftxrfxt"];

for (let i = 0; i < diller.length; i++) {
    let dil = diller[i];
    if (dil.length > 6) {
        console.log(dil);
    }
}

let sonuc = diller.includes("Python");
console.log(sonuc);

let siparisler = ["Kebab", "Lahmacun", "Döner"];

siparisler.push("Çorba");
console.log("Yeni siparişler: " + siparisler);
siparisler.pop();
console.log("Son Sipariş Silindi: " + siparisler);
let secilen = siparisler.slice(1, 3);
console.log("Alınan Sipariş: " + secilen);
let eklenen = siparisler.splice(1, 0, "Cacık")
console.log("Son sipariş: ", siparisler)

let notlar = [60.80, 50, 95, 40];

let enYuksek = Math.max(...notlar);
let enDusuk = Math.min(...notlar);
console.log("En Yüksek Not: " + enYuksek, ",", "En Düşük Not: " + enDusuk);

let toplam = 0;

for (let i = 0; i < notlar.length; i++) {
    toplam += notlar[i];
}

let ortalama = toplam / notlar.length;
console.log("Ortalama Not: " + ortalama);

let gecenler = [];
let kalanlar = [];

for (let i = 0; i < notlar.length; i++) {
    if (notlar[i] >= 50) {
        gecenler.push(notlar[i]);
    } else {
        kalanlar.push(notlar[i]);
    }
}

console.log("Geçen Notlar: ", gecenler);
console.log("Kalan Notlar: ", kalanlar);

let sepet = [
    { urun: "Kitap", fiyat: 30 },
    { urun: "Kalem", fiyat: 5 },
    { urun: "Defter", fiyat: 10 }
];

sepet.push({ urun: "Pencere", fiyat: 25 });
for (let i = 0; i < sepet.length; i++) {
    console.log(sepet[i].urun + ": " + sepet[i].fiyat + " TL");
}

let toplamFiyat = 0;

for (let i = 0; i < sepet.length; i++) {
    toplamFiyat += sepet[i].fiyat;
}

console.log("Toplam Fiyat: " + toplamFiyat);

let filmler = ["Matrix", "Inception", "Interstellar", "Joker"];

let sıralı = filmler.sort();
console.log("Sıralı Filmler: ", sıralı);

let arananFilm = "Matrix";
let bulundumu = false;

for (let i = 0; i < filmler.length; i++) {
    if (filmler[i] === arananFilm) {
        bulundumu = true;
    }
}

if (bulundumu) {
    console.log(arananFilm + " filmi bulundu.");
} else {
    console.log(arananFilm + " filmi bulunamadı.");
}

let silinsin = "Joker";
for (let i = 0; i < filmler.length; i++) {
    filmler.splice(i, 1);
}

console.log("Silinen Film: " + silinsin);*/