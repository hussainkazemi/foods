#!/bin/node

const sleep_time = 200;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

ReadFoods = async function(){
    const fs = require('fs');
    try { 
        const data = fs.readFileSync(__dirname+'/foods.txt', 'utf8')
        let foods = data.split('\n');
        // split return a empty element in last of arry. here remove last index for create clean array
        return foods;
      } catch (err) {
        console.error(err)
      }    
}

PrintFood = async function(){
    const foods = await ReadFoods();
    const max = foods.length;
    const min = 0 ;
    let food = "";
    for (var i =0; i<20; i++){
        console.clear();
        food = foods[Math.floor(Math.random() * (max - min) + min)];
        console.log(`در حال انتخاب غذا برای شما\n>>>>${food}<<<<`);
        await sleep(sleep_time);
    }
    console.clear();
    console.log(`غذای انتخابی برای شما ${food} می باشد.`)
}
 
PrintFood();
