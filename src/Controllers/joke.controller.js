import {
  listAllJokes,
  createJoke,
  findJokeById,
  deleteFindJokeById,
  scoreJokeById,
} from "../Repositories/joke.repository";

export const getAllJokes = async (req, res) => {
  const allJokes = await listAllJokes();
  return res.json(allJokes);
};

export const postNewJoke = async (req, res) => {
  const body = req.body;
  let newJoke = await createJoke(body);
  if (newJoke) {
    return res.json(newJoke);
  } else {
    return res.json({ message: "cannot create this joke" });
  }
};

export const getJokeById = async (req, res) => {
  const id = req.params.id;
  let joke = await findJokeById(id);
  return res.json(joke);
};

export const deleteJokeById = async (req, res) => {
  const id = req.params.id;
  let joke = await deleteFindJokeById(id);
  return res.json(joke);
};

export const likeJokeById = async (req, res) => {
  const id = req.params.id;
  let joke = await scoreJokeById(id, "like");
  return res.json(joke);
};

export const dislikeJokeById = async (req, res) => {
  const id = req.params.id;
  let joke = await scoreJokeById(id, "dislike");
  return res.json(joke);
};
