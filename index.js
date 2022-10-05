// const path=require('path')
// const os= require('os')

// const mypath= 'D:/WEB/WEB-DEV-PRACTISE/coreNODE_LWT/index.js'

// console.log(path.basename(mypath))

// console.log(path.parse(mypath))

// console.log(os.platform())

// console.log(os.freemem())

// console.log(os.networkInterfaces())

// console.log(os.uptime())

// let time= os.uptime()

// time =(time/60)/60
// console.log(time)


// console.log(os.cpus())



// file system


const fs= require('fs');

//  fs.writeFileSync('output.txt', 'Hello Saiful')
//   fs.appendFileSync('output.txt', ' How are you?')


// read from file

// const data=fs.readFileSync('output.txt')
// console.log(data.toString())


// this is asynchronus method
// fs.readFile('output.txt', (err,data)=>{
//     console.log(data.toString())
// })



// console.log("Hello")







const School= require('./school')


const school= new School()


//  register listner for barking event
school.on('bark', ({period, text})=>{
    console.log(`We need to run because ${period} ${text}`)
})



school.startPeriod()