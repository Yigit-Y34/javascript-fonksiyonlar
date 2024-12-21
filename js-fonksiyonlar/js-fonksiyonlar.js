/*function merhabaDunya() {
    console.log("Merhaba Dünya!");
}
merhabaDunya();

function topla(a, b) {
    return a + b;
}
let sonuc = topla(7, 3);
console.log(`Sonuc: ${sonuc}`);

function topla(a, b) {
    return (a + b);
}
let sonuc = topla(5, 8);
console.log(`Toplam: ${sonuc}`);

function enBuyuk(a, b, c) {
    return Math.max(a, b, c);
}

console.log(enBuyuk(5, 10, 3));

function faktoriyel(n) {
    if (n == 0) {
        return 1;
    }
    return n * faktoriyel(n - 1);
}

console.log(faktoriyel(5));

function tekSayilariToplama(dizi) {
    let toplam = 0;


    for (let i = 0; i < dizi.length; i++) {
        if (dizi[i] % 2 !== 0) {
            toplam += dizi[i];
        }
    }
    return toplam;
}

dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("Tek sayıların toplamı = " + tekSayilariToplama(dizi));

function ciftSayilar(dizi) {
    let cift = [];
    for (let i = 0; i < dizi.length; i++) {
        if (dizi[i] % 2 == 0) {
            cift.push(dizi[i]);
        }
    }
    return cift;
}

dizi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Çift Sayılar: " + ciftSayilar(dizi))

function enKucukSayi(dizi, index = 0, min = Infinity) {
    if (index >= dizi.length) return min;
    if (dizi[index] < min) min = dizi[index];
    return enKucukSayi(dizi, index + 1, min);
}

let sayilar = [45, 7, 23, 3, 15, 89, 2, 34];
console.log("En Küçük Sayı: " + enKucukSayi(sayilar));

function harfSay(cumle, aranan) {
    return cumle.split(aranan).length - 1;
}
console.log(harfSay("Dark Souls dünyadaki en kolay oyun.", "a"))

function ortalama(dizi) {
    let toplam = 0;
    for (let i = 0; i < dizi.length; i++) {
        toplam += dizi[i];
    }
    return toplam / dizi.length;
}

let dizi = [5, 8, 12, 15, 20];
console.log("Ortalama: " + ortalama(dizi));

function usHesaplama(sayi, üs) {
    return Math.pow(sayi, üs);
}

console.log(usHesaplama(5, 3));*/