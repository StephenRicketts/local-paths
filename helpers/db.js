import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("lists.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, movieId TEXT NOT NULL);",
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

export const insertMovie = (title, movieId) => {
  const promise = newPromise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO lists (title, movieId) VALUES (?, ?);`,
        [title, movieId],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};
