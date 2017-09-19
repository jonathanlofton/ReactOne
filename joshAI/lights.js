
class Lights {
    constructor() {

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    loop() {
        sleep(2000);
        console.log("this works")
    }
}

const lightOne = new Lights 
lightOne.loop();