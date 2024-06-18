interface TakePhoto {
    cameraMode : string
    filter : string
    burst : number
}

interface Story {
    createStory() : string
}

// Interface are Just like the Protocols 
// Here we Implements the interface then we need all of the Properities in the Interface
// We can add more // But We need all from the Interface
class Instagram implements TakePhoto , Story {
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ) {}

    createStory(): string {
        return "Story Created"
    }
}


class YouTube implements TakePhoto {
    constructor (
        public cameraMode : string,
        public filter : string,
        public burst : number ,
        public short : string,          // We can add More properties than the Interface 
    ) {}
}


const selfie = new YouTube("Portrait" , "beauty" , 3 , "Good")