import { insertMovie } from ".../helpers/db";

try {
  const dbResult = await insertMovie(title, movieId);
  console.log(dbResult);
} catch (err) {
  console.log(err);
  throw err;
}
