const students = require('../data/students');

const findStudent = (id) => students.find((student) => student.id === id);

const getAll = (req, res) => {
  res.status(200).json({
    success: true,
    total: students.length,
    students
  });
};

const getOne = (req, res, next) => {
  const student = findStudent(Number(req.params.id));

  if (!student) {
    const error = new Error('Student not found');
    error.statusCode = 404;
    return next(error);
  }

  res.status(200).json({ success: true, student });
};

const create = (req, res) => {
  const { name, age, course, email } = req.body;
  const nextId = students.length
    ? Math.max(...students.map((student) => student.id)) + 1
    : 101;

  const student = {
    id: nextId,
    name: name.trim(),
    age: Number(age),
    course: course.trim(),
    email: email.trim().toLowerCase()
  };

  students.push(student);

  res.status(201).json({
    success: true,
    message: 'Student added successfully',
    student
  });
};

const update = (req, res, next) => {
  const student = findStudent(Number(req.params.id));

  if (!student) {
    const error = new Error('Student not found');
    error.statusCode = 404;
    return next(error);
  }

  const { name, age, course, email } = req.body;
  student.name = name.trim();
  student.age = Number(age);
  student.course = course.trim();
  student.email = email.trim().toLowerCase();

  res.status(200).json({
    success: true,
    message: 'Student details updated successfully',
    student
  });
};

const remove = (req, res, next) => {
  const id = Number(req.params.id);
  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    const error = new Error('Student not found');
    error.statusCode = 404;
    return next(error);
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: 'Student deleted successfully',
    student: deletedStudent
  });
};

module.exports = { getAll, getOne, create, update, remove };
