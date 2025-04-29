import mongoose from "mongoose";


 export const ConnectDB = async () => {
      await mongoose.connect('mongodb+srv://avisekmandal2003:avisek5331@cluster0.d4dccfk.mongodb.net/next_blog')
      console.log("DB connected")
}