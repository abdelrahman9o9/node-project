import { Schema, model } from "mongoose";

const student = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        academic_id: {
            type: String,
            required: true,
        },

    }, { timestamps: true }
);

export default model('student', student);