let cel = document.getElementById("cel");
let far = document.getElementById("far");
let kel = document.getElementById("kel");
let btn = document.getElementById("btn");

far.addEventListener('keyup', (e) => {
    let x = far.value;
    let c = (x - 32) * 5 / 9;
    kel.value = (c + 273.15).toFixed(2);
    cel.value = c.toFixed(2);
})
cel.addEventListener('keyup', (e) => {
    let x = cel.value;
    far.value = (x * (9 / 5) + 32).toFixed(2);
    kel.value = +x + 273.15;
})
kel.addEventListener('keyup', (e) => {
    let x = kel.value;
    cel.value = (x - 273.15).toFixed(2);
    far.value = ((x - 273.15) * 9 / 5 + 32).toFixed(2);
})

btn.addEventListener('click', () => {
    cel.value = "";
    far.value = "";
    kel.value = "";
})