// touchstart=
// touchmove
// touchend
// touchenter
// touchleave
// touchcancle

window.addEventListener('DOMContentLoaded', () => {  
    const box = document.quarySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefult();

        console.log('Start') 
        console.log('e.touches');

        console.log(e.targetTouches);
    })

    box.addEventListener('touchmove', (e) => {
        e.preventDefult();

        console.log('Move')

        console.log(e.targetTouches[0].pageX);
    })


    box.addEventListener('touchend', (e) => {
        e.preventDefult();

    console.log('End');``
    })
});                                                                                                                                                


   



// touches
// targetTouches
// changedTouches
