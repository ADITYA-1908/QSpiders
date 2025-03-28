document.addEventListener('DOMContentLoaded', () => {

    const mark1 = document.getElementById('mark1')
    const mark2 = document.getElementById('mark2')
    const mark3 = document.getElementById('mark3')
    const mark4 = document.getElementById('mark4')
    const mark5 = document.getElementById('mark5')
    const mark6 = document.getElementById('mark6')

    const fullMark = document.getElementById('fullMark')

    const seeResult = document.getElementById('button_1')

    const finalResult = document.getElementById('resultDis')
    const finalGrade = document.getElementById('gradeDis')

    seeResult.addEventListener('click', () => {
        const mark_1 = Number(mark1.value)
        const mark_2 = Number(mark2.value)
        const mark_3 = Number(mark3.value)
        const mark_4 = Number(mark4.value)
        const mark_5 = Number(mark5.value)
        const mark_6 = Number(mark6.value)

        const full_mark = Number(fullMark.value)

        const sumOfMarks = mark_1 + mark_2 + mark_3 + mark_4 + mark_5 + mark_6

        let percentage = (sumOfMarks / full_mark) * 100

        if (full_mark === 0) {
            return

        }
        else if (mark_1 >= 35 && mark_2 >= 35 && mark_3 >= 35 && mark_4 >= 35 && mark_5 >= 35 && mark_6 >= 35) {
            finalResult.innerText = `Your percentage is ${percentage.toFixed(2)}% .`
            console.log(`Your percentage is ${percentage.toFixed(2)}% .`)

            if (percentage >= 90) {
                finalGrade.innerText = "Your Grade is A+"
            } else if (percentage >= 80 && percentage <= 89) {
                finalGrade.innerText = "Your Grade is A"
            } else if (percentage >= 70 && percentage <= 79) {
                finalGrade.innerText = "Your Grade is B"
            } else if (percentage >= 60 && percentage <= 69) {
                finalGrade.innerText = "Your Grade is C"
            } else if (percentage >= 50 && percentage <= 59) {
                finalGrade.innerText = "Your Grade is D"
            } else if (percentage >= 35 && percentage <= 49) {
                finalGrade.innerText = "Your Grade is E"
            } else return
        }
        else if (mark_1 <= 35 || mark_2 <= 35 || mark_3 <= 35 || mark_4 <= 35 || mark_5 <= 35 || mark_6 <= 35) {
            finalResult.innerText = "Oops ! You are failed . Better luck next time ."
            console.log("You are failed")
        }
        else return

        mark1.value = "";
        mark2.value = "";
        mark3.value = "";
        mark4.value = "";
        mark5.value = "";
        mark6.value = "";
        fullMark.value = "";
    })

})