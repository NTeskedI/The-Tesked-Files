const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"

document.getElementById("load-text").onmouseover = event => {
    let iterations = 0

   const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if (index < iterations) {
            return event.target.dataset.value[index];
        }
        
        return symbols[Math.floor(Math.random() * 35)]
   })
    .join("");

    if(iterations >= event.target.dataset.value.length) clearInterval(interval);

    iterations += 1 / 6;
}, 30);
}