import mongoose from 'mongoose';

// defining schema
const studentSchema = new mongoose.Schema({
    stuname : {type: String, required: true, trim: true},
    email : {type: String, required: true, trim: true}
})

// Model
const StudentModel = mongoose.model("student", studentSchema) // collection name is students

export default StudentModel 