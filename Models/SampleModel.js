const mongoose = require("mongoose");
const SampleSchema = mongoose.Schema(
  {
    // lastName:{
    //   type:String,
    //   required:[true, "Please this field is required"],
    //   unique: true,
    //   default: "chris" //this means that if a user does  not fill this field the default would be chris.
    // },

    // projectImg:[{
    //   pix:{
    //     type: string
    //   }
    // }],
    //
    // to include an image OR

    // projectImg: [""]

    ///// title is an example of a data field structure
    title: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sample", SampleSchema);
