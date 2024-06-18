"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // We can return value By using Abstract Class
    // We cannot do this on the Interface
    createReel() {
        return 8;
    }
}
class WhatsApp extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createVideo() {
        console.log("New Video is Created");
    }
}
// const newPhoto = new TakePhoto("photo" , "beauty")  // We cant create object for the Abstract class
const newPhoto = new WhatsApp("photo", "beauty", 33); // We Only create objects for the Class that inherits 
// From the Abstract class
newPhoto.createReel();
