const ram8 = document.getElementById('ram-8');
const ram16 = document.getElementById('ram-16');
const ssd256 = document.getElementById('ssd-256');
const ssd512 = document.getElementById('ssd-512');
const ssd1024 = document.getElementById('ssd-1024');
const del0 = document.getElementById('del-0');
const del20 = document.getElementById('del-20');
const promo = document.getElementById('promo');
const promoInput = document.getElementById('promo-input');
const bestPrice = document.getElementById('best-price');
const delPurchase = document.getElementById('del-price');
const totalPrice = document.getElementById('total-price');
const price = document.getElementById('price');
const ramPrice = document.getElementById('ram-price');
const romPrice = document.getElementById('rom-price');

ram8.addEventListener('click', function () {
    const ramPriceTotal = ramPrice.innerText = 0;
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const extraRom = parseInt(romPrice.innerText);
    const delPurchaseTotal = parseInt(delPurchase.innerText);
    const totalPriceAll = (ramPriceTotal + bestPriceTotal + extraRom + delPurchaseTotal);
    totalPrice.innerText = totalPriceAll;
    price.innerText = totalPriceAll;
});

ram16.addEventListener('click', function () { 
    const ramPriceTotal = ramPrice.innerText = 180;
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const extraRom = parseInt(romPrice.innerText);
    const delPurchaseTotal = parseInt(delPurchase.innerText);
    const totalPriceAll = (ramPriceTotal + bestPriceTotal + extraRom + delPurchaseTotal);
    totalPrice.innerText = totalPriceAll;
    price.innerText = totalPriceAll;
    
});

//rom price calculation
ssd256.addEventListener('click', function () {
    const extraRom = romPrice.innerText = 0;
    const ramPriceTotal = parseInt(ramPrice.innerText);
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const delPurchaseTotal = parseInt(delPurchase.innerText);
    const totalPriceAll = (ramPriceTotal + bestPriceTotal + extraRom + delPurchaseTotal);
    totalPrice.innerText = totalPriceAll;
    price.innerText = totalPriceAll;
});
ssd512.addEventListener('click', function () {
    const extraRom = romPrice.innerText = 100;
    const ramPriceTotal = parseInt(ramPrice.innerText);
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const delPurchaseTotal = parseInt(delPurchase.innerText);
    const totalPriceAll = (ramPriceTotal + bestPriceTotal + extraRom + delPurchaseTotal);
    totalPrice.innerText = totalPriceAll;
    price.innerText = totalPriceAll;
});
ssd1024.addEventListener('click', function () {
    const extraRom = romPrice.innerText = 180;
    const ramPriceTotal = parseInt(ramPrice.innerText);
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const delPurchaseTotal = parseInt(delPurchase.innerText);
    const totalPriceAll = (ramPriceTotal + bestPriceTotal + extraRom + delPurchaseTotal);
    totalPrice.innerText = totalPriceAll;
    price.innerText = totalPriceAll;
});


//delivery price calculation

del0.addEventListener('click', function () {
    const delPurchaseTotal = delPurchase.innerText = 0;
    const extraRom = parseInt(romPrice.innerText)
    const ramPriceTotal = parseInt(ramPrice.innerText);
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const totalPriceAll = (ramPriceTotal + bestPriceTotal + extraRom + delPurchaseTotal);
    totalPrice.innerText = totalPriceAll;
    price.innerText = totalPriceAll;
}); 
del20.addEventListener('click', function () { 
    const delPurchaseTotal = delPurchase.innerText = 20;
    const extraRom = parseInt(romPrice.innerText)
    const ramPriceTotal = parseInt(ramPrice.innerText);
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const totalPriceAll = (ramPriceTotal + bestPriceTotal + extraRom + delPurchaseTotal);
    totalPrice.innerText = totalPriceAll;
    price.innerText = totalPriceAll;
});

 function promoCode() {
    const promo = promoInput.value.toLowerCase();
    // const promoCon = promo.toLowerCase();
    const promoCode = parseInt(price.innerText);
    const code = 'stevekaku';
    if (promo == code) {
        const discount = promoCode - (promoCode * 0.2);
        price.innerText = discount;
        promoInput.value = '';
    }
    else {
        alert('Discount promo code not valid');
        promoInput.value = '';
    }
}





