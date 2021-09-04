const button = document.getElementsByClassName('my-button');

console.log(button)

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        alert('that tickles')
    })
}
