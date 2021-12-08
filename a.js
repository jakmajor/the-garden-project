let plants = []
let tempPlants = []

document.querySelectorAll('.cropCircleImg').forEach(a => plants.push({img: a.src}))

document.querySelectorAll(
    '.plantListCell > div:not(.numberCircle):not(.addPlantCircle):not(.takesAppClass)'
).forEach((a,i) => {
    if (!a.innerText.toString().includes('Create') && !a.innerText.toString().includes('▼') && !a.innerText.toString().includes('▽') && !a.innerText.toString().includes('(') && a.innerText){
        console.log(a)
    }
})

tempPlants.forEach((a,i) => 
    plants[i].name = a
)