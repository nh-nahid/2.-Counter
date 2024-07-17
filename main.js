const counter = document.querySelector(`.count`)
const increment = document.querySelector(`.increment`)
const decrement = document.querySelector(`.decrement`)
const reset = document.querySelector(`.reset`)


function implementColor (count){


    if(Number(count) > 0){
        counter.classList.add(`green`)
        counter.classList.remove(`red`)
        counter.classList.remove(`black`)
    } else if(Number(count) < 0){
        counter.classList.remove(`green`)
        counter.classList.add(`red`)
        counter.classList.remove(`black`)
    } else{
        counter.classList.remove(`green`)
        counter.classList.remove(`red`)
        counter.classList.add(`black`)
    }
}

increment.addEventListener(`click`, function(){
    counter.innerText = Number(counter.innerText) + 1
    implementColor (counter.innerText)
})

decrement.addEventListener(`click`, function(){
    counter.innerText = Number(counter.innerText) - 1
    implementColor (counter.innerText)

})

reset.addEventListener(`click`, function(){
    counter.innerText = 0
    implementColor (counter.innerText)
})

