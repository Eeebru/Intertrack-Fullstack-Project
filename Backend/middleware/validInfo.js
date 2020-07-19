module.exports = (req, res, next) => {
  const { email, name, password, confirmPassword, gender, dob, address, state} = req.body;

  const validEmail = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  if (req.path === '/signup') {
  if (
		![
			email,
			name,
			password,
			confirmPassword,
			dob, gender, address, state,
		].every(Boolean)
	) {
		return res
			.status(400)
			.json({ status: 400, result: "One or More Credential is Missing" });
	} else if (!validEmail(email)) {
		return res.status(400).json({ status: 400, result: "Invalid Email" });
	} else if (password !== confirmPassword) {
		return res
			.status(400)
			.json({ status: 400, message: "Password Does Not Match" });
	} else if (password.length < 6) {
		return res
			.status(400)
			.json({ status: 400, message: "Password is Less Than 6 Characters" });
	}
  } else if (req.path === '/login') {
    if (![email, password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    } else if (!validEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  }

  next();
};
