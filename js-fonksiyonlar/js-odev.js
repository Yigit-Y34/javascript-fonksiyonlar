let sayi = 5;

for (let i = 0; i < sayi; i++) {
    let satir = "";
    for (let j = 0; j <= i; j++) {
        satir += (j + 1);
    }
    console.log(satir.trim());
}