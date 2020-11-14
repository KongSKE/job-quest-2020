import { Joke } from "../Models/Joke";

export const listAllJokes = async () => {
  const allJokes = await Joke.find();
  return allJokes;
};

export const createJoke = async (body) => {
  let joke = new Joke({
    joke: body.joke,
    like: 0,
    dislike: 0,
    deleted: 0, // 1 is deleted
    deleted_at: null,
  });

  if (joke.save()) {
    console.log("create joke success");
    return joke;
  } else {
    return null;
  }
};

export const findJokeById = async (id) => {
  const joke = await Joke.findById(id);
  return joke;
};

export const deleteFindJokeById = async (id) => {
  const joke = await Joke.findByIdAndDelete(id);
  return joke;
};

export const scoreJokeById = async (id, type) => {
  try {
    let joke;
    switch (type) {
      case "like":
        joke = await Joke.findByIdAndUpdate(id, {
          $inc: {
            like: 1,
          },
        });
        break;
      case "dislike":
        joke = await Joke.findByIdAndUpdate(id, {
          $inc: {
            dislike: 1,
          },
        });
        break;
      default:
        joke = null;
        break;
    }
    return joke;
  } catch (error) {
    console.log(error);
  }
};
