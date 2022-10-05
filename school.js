const EventEmitter=require('events');



class School extends EventEmitter{
 startPeriod(){
    console.log('class started')
    // raise the event
    setTimeout(() => {
        this.emit('bark', {
            period:'first',
            text:'period ended'
        })
    }, 2000);
}

}
module.exports=School;