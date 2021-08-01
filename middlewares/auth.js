exports.checkIsAdmin = (req, res, next) => {
  console.log('Checking role...');
  console.log(req.user.role);
  if (req.user.role === 'admin')
    next();
  else
    res.status(403).json({ msg: 'Forbidden' });
};

exports.checkIsTeacherOrAdmin = (req, res, next) => {
  console.log('Checking role...');
  console.log(req.user.role);
  if (req.user.role === 'admin' || req.user.role === 'teacher')
    next();
  else
    res.status(403).json({ msg: 'Forbidden' });
};
