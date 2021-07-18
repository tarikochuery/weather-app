const weekDays = [
    {id: 0, weekDay: 'Sunday'},
    {id: 1, weekDay: 'Monday'},
    {id: 2, weekDay: 'Tuesday'},
    {id: 3, weekDay: 'Wednesday'},
    {id: 4, weekDay: 'Thursday'},
    {id: 5, weekDay: 'Friday'},
    {id: 6, weekDay: 'Saturday'}
]

const weekDay = (day) =>{
    let weekDay
    for (let d of weekDays) {
        if (day === d.id){
           weekDay = d.weekDay
           break
        }
    }
    
    return(weekDay)
}

export {weekDay}