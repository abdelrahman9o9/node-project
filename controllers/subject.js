
import subject from "../models/subject.js";
import department from "../models/department.js";

export const index = async (req, res) => {
    console.log (req.user);
    const subjects = await subject.find({}, { name: 1 }).lean();
    res.render('subjects/index', { subjects })
};

export const create = async (req, res) => {
    const departments = await department.find().lean();
    res.render('subjects/create', { departments });
};

export const store = async (req, res) => {
    const { name, code, department, prerequisite  } = req.body;

    await subject.create({
        name,
        code,
        department,
        prerequisite,
        
    });
    res.redirect('/subjects');

};

export const show = async (req, res) => {
    const { id } = req.params;

    const singlesubject = await subject.findById(id).populate('department').lean();

    res.render('subjects/show', { subject: singlesubject })
};

export const edit = async (req, res) => {
    const { id } = req.params;
    const editformsubject = await subject.findById(id).lean();
    const departments = await department.find().lean();
    res.render('subjects/edit', { departments, subject: editformsubject });
};

export const update = async (req, res) => {
    const { name, code, department, prerequisite,Doctor } = req.body;
    const { id } = req.params;
    await subject.findByIdAndUpdate(id, { $set: { name: name, code: code, department: department, prerequisite: prerequisite } })
    res.redirect('/subjects');

};

export const deleteOne = async (req, res) => {
    const { id } = req.params;
    await subject.findByIdAndDelete(id)
    res.redirect('/subjects');

};