import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("viewingList.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS viewingList (id INTEGER PRIMARY KEY NOT NULL, movieId TEXT NOT NULL, movieObj TEXT NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertMovie = (movieId, movieObj) => {
  let stringifiedMovieObj = JSON.stringify(movieObj);
  const promise = newPromise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO viewingList (MovieObj) VALUES (?, ?);`,
        [movieId, stringifiedMovieObj],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchListItems = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM viewingList",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
