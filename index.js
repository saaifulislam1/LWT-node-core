

const School= require('./school')


const school= new School()


//  register listner for barking event
school.on('bark', ({period, text})=>{
    console.log(`We need to run because ${period} ${text}`)
})



school.startPeriod()