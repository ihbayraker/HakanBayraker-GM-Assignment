import { test } from "@playwright/test";
import { init, assignParams } from "../../../functions/api.ts";
import * as bookstore from "../../../api/bookstore.ts";


export const params = {
  username:"HakanGM",
  password:"Hb12345$",
  book1:"9781449325862",
  book2:"9781449331818",
}

test.describe('Bookstore Api validation', () => {
  test.beforeAll(async () => {
    await assignParams(params);
  });

  test.beforeEach(async ({request}) => {
    await init(request);
    await bookstore.createUser();
    await bookstore.getToken();
  });

  test.afterEach(async ({}) => {
    await bookstore.deleteUser();
  });

  test('add/delete books', async () => {
    await bookstore.addBooks(true);
    await bookstore.getUser();
    await bookstore.verifyBooksAreAdded();
    await bookstore.removeBookFromUser();
    await bookstore.getUser();
    await bookstore.verifyBookIsRemoved();
  });

  test('Unathorized addition Attempt', async () => {
    await bookstore.addBooks(false);
  });

});
