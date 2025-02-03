const user = window.document.getElementById("user")

user.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})