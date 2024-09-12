function gerarcores() {
    const chars = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return color;
}

document.getElementById('btn').addEventListener('click', () => {
    for(let i = 1; i <= 5; i++) {
        let div_color = document.getElementById(`color-${i}`);
        let newColor = gerarcores();
        div_color.style.background = newColor;
        document.getElementById(`txt-color-${i}`).textContent = newColor;
    }
});