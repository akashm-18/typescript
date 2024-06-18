"use strict";
// Interface are Just like the Protocols 
// Here we Implements the interface then we need all of the Properities in the Interface
// We can add more // But We need all from the Interface
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        return "Story Created";
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}
const selfie = new YouTube("Portrait", "beauty", 3, "Good");
