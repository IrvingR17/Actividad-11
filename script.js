const todo = (tarea, duracion, callback) => {
    setTimeout(()=>{
         callback(tarea)
    }, duracion)
}

todo("Levantarse",5000, (tarea) => {
    console.log(`Realizando la tarea ${tarea}`)
    todo("Tender la cama",5000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
            todo("Bañarse",3000, (tarea) => {
                console.log(`Realizando la tarea ${tarea}`)
                  todo("clase de paradigmas ",3000, (tarea) => {
                        console.log(`Realizando la tarea ${tarea}`)
                         todo("Desayunar ",8000, (tarea) => {
                                console.log(`Realizando la tarea ${tarea}`)
                                 todo("Jugar ",10000, (tarea) => {
                                        console.log(`Realizando la tarea ${tarea}`)
                                    })
                            })
                    })
            })
    })
})