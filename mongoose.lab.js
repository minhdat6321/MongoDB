console.log("hello MyName!")

const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017"

const main = async () => {
  try {
    // Connect to  MongoDB
    await mongoose.connect(mongoURI)
    console.log(`Connect Successfully to `, mongoURI)

    //Define schema
    const kittySchema = mongoose.Schema({
      name: { type: String, required: true }
      //Shorthand
      // name: String
    })
    //create function 
    kittySchema.methods.speak = function () {
      const greeting = this.name ? "Meww my name is: " + this.name : "I don't have a name"
      console.log(greeting)
    }

    const Kitten = mongoose.model("Kitten", kittySchema)
    const silence = new Kitten({ name: "silence" })
    const noise = new Kitten({ name: "noise" })
    const ninja = new Kitten()

    const kittyClub = await Kitten.find({})
    const singleKitty = await Kitten.findOneAndUpdate(
      { name: "silence-changed - name" },
      { name: "silence NEW TRUE" },
      { new: true }
    )

    console.log("welcome: ", singleKitty)
  }
  catch (error) {
    console.log(`Error `, error)
  }
}
main()