import Users from "../models/users.js";

// get all with pagination
export async function getUsers(req, res, next) {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;

    const users = await Users.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(users);
  } catch (err) {
    next(err);
  }
}

// get user by id
export async function getUserById(req, res, next) {
  try {
    const user = await Users.findOne({ _id: req.params.id });

    return res.send(user);
  } catch (err) {
    next(err);
  }
}

// create user
export async function createUser(req, res, next) {
  try {
    const newUser = await Users.create(req.body);

    return res.send(newUser);
  } catch (err) {
    next(err);
  }
}

// update user by id
export async function updateUserById(req, res, next) {
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
    );

    return res.send(newUser);
  } catch (err) {
    next(err);
  }
}

// delete user by id
export async function deletedUserById(req, res, next) {
  try {
    const deletedUser = await Users.findOneAndDelete({ _id: req.params.id });
    if (!deletedUser) {
      res.status(404).send("user not found");
    }
    return res.send(deletedUser);
  } catch (err) {
    next(err);
  }
}
