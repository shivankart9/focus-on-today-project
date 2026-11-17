const allCheckbox = document.querySelectorAll('.coustom-checkbox')

allCheckbox.forEach((checkboxcontainer) => {
    checkboxcontainer.addEventListener('click',() => {
        const checkIcon = checkboxcontainer.querySelector('.checkbox')

        if(checkIcon.style.display === "flex") {
            checkIcon.style.display = "none"
        } else {
            checkIcon.style.display = "flex"
        }
    })
})
