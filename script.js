const bt = document.querySelector("body > div > div.lower > div.actions > div")
const bigMsg = document.querySelector(".big-msg h1")
const input = document.querySelector("#task")
const area = document.querySelector("body > div > div.lower")
const helper = document.querySelector(".helper p")
const dash = document.querySelector(".dashboard")

function start() {
    let task = input.value
    if (task.trim()) {
        // get the info in the input

        // let them disappear
        area.style.display = 'none'

        // change the big mesage text
        bigMsg.textContent = `You are to ${task}`

        // make a finish button to go back to square 1
        let finish = makeButton("Finish", "finish")
        dash.append(finish)
        finish.addEventListener("click", finishTask)


        // remove that enter shortcut
        document.removeEventListener("keypress", handleEnter)
    } else {
        helper.style.color = 'red'
    }
}

function finishTask() {
    // destroy the finish button
    let finishbt = document.querySelector('.finish.button')
    finishbt.remove()

    // return the inputs
    area.style.display = 'flex'

    // select that previous ones for them to 
    // start typing straight

    input.select()

    document.addEventListener("keypress", handleEnter)

}


function makeButton(title, classes) {

    let finish = document.createElement('div')
    finish.classList = `button ${classes}`
    finish.textContent = `${title}`
    return finish


}

function handleEnter(ev) {
    if (ev.key === "Enter") {
        start()
    }
}

bt.addEventListener("click", start)
document.addEventListener("keypress", handleEnter)