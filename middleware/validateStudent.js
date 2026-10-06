const validateStudent = (req, res, next) => {
  const { name, age, course, email } = req.body || {};
  const missing = [];

  if (typeof name !== 'string' || !name.trim()) missing.push('name');
  if (age === undefined || age === null || age === '') missing.push('age');
  if (typeof course !== 'string' || !course.trim()) missing.push('course');
  if (typeof email !== 'string' || !email.trim()) missing.push('email');

  if (missing.length) {
    const error = new Error(`Required fields missing: ${missing.join(', ')}`);
    error.statusCode = 400;
    return next(error);
  }

  if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
    const error = new Error('Age must be a positive whole number');
    error.statusCode = 400;
    return next(error);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    const error = new Error('Please enter a valid email address');
    error.statusCode = 400;
    return next(error);
  }

  next();
};

const validateId = (req, res, next) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    const error = new Error('Student ID must be a positive integer');
    error.statusCode = 400;
    return next(error);
  }

  next();
};

module.exports = { validateStudent, validateId };
