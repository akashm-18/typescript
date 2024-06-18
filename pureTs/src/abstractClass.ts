abstract class TakePhoto {
    constructor (
        public cameraMode : string,
        public filter : string
    ) {}

    // We cant create method definition from the Abstract Class
    // We Only Do from the Child Class
    // We can do this thing on the Interface also 
    // But We cant return any value from the Interface Itself
    abstract createVideo () : void

    // We can return value By using Abstract Class
    // We cannot do this on the Interface
    createReel() : number {
        return 8
    }
}

class WhatsApp extends TakePhoto {
    constructor (
        public cameraMode : string,
        public filter : string,
        public burst : number
    ) {
        super(cameraMode , filter)
    }

    createVideo(): void {
        console.log("New Video is Created")
    }
}

// const newPhoto = new TakePhoto("photo" , "beauty")  // We cant create object for the Abstract class
const newPhoto = new WhatsApp("photo" , "beauty" , 33) // We Only create objects for the Class that inherits 
                                                    // From the Abstract class
newPhoto.createReel()