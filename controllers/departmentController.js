import department from "../models/department.js";



export const index = async (req, res) => {

    const departments = await department.find({}, { name: 1 }).lean();
    res.render('departments/index', { departments });
};

export const create = async (req, res) => {
    const departments = await department.find().lean();
    res.render('departments/create', departments);
};

export const store = async (req, res) => {
    const { name, code} = req.body;
    await department.create({
        name,
        code,
    });
    res.redirect('/departments')
};

export const editDepartment = async (req, res) => {
    const { _id } = req.params;
    const editFormDepartment = await department.findById(_id).lean();
    const departments = await department.find().lean();
    res.render('departments/edit', { departments , department: editFormDepartment } );
};

export const updateDepartment = async (req, res) => {
    const { name, code } = req.body;
    const { _id } = req.params;

    await department.findByIdAndUpdate(_id , 
        {$set: { name, code },
    });
    
    res.redirect('/departments')
};

export const show = async (req, res) => {
    const { _id } = req.params;
    const singleDepartment = await department.findById({_id}).lean();
    res.render('departments/show', { department: singleDepartment });
};

export const deleteDepartment = async (req, res) => {
    const { _id } = req.params;

    await department.findByIdAndDelete(_id);
    
    res.redirect('/departments')
};