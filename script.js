const allCheckbox = document.querySelectorAll('.coustom-checkbox')
const progressValue = document.querySelector('.progress-value')
const erorLabel = document.querySelector('.error')
const allInput = document.querySelectorAll('.goal-input')

allCheckbox.forEach((checkboxcontainer) => {
    checkboxcontainer.addEventListener('click',() => {

        const allGoals = [...allInput].every((input) => input.value.trim() !== '');

        if(!allGoals) {
            erorLabel.style.display = 'block'
            return
        }

        const checkIcon = checkboxcontainer.querySelector('.checkbox')

        if(checkIcon.style.display === "flex") {
            checkIcon.style.display = "none"
            
        } else {
            checkIcon.style.display = "flex"
        }

        let completedCount = 0
        allCheckbox.forEach((box) => {
            if(box.querySelector('.checkbox').style.display === "flex") {
                completedCount++;
            }
        })

        progressValue.style.width = `${(completedCount/allCheckbox.length)*100}%`
        progressValue.innerText = `${completedCount} / ${allCheckbox.length}completed`
    })
})
