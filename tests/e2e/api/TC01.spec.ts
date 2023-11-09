import { test } from "@playwright/test";
import { init, assignParams } from "../../../functions/api.ts";
import * as bookstore from "../../../api/bookstore.ts";


export const params = {
  username:"HakanGM",
  password:"Hb12345$",
}

test.describe('Bookstore Api validation', () => {
  test.beforeAll(async () => {
    await assignParams(params);
  });

  test.beforeEach(async ({request}) => {
    await init(request);
  });

  test.afterEach(async ({}) => {
    await bookstore.deleteUser();
  });

  test('Verify entry creation', async () => {
    await bookstore.createUser();
    await bookstore.getToken();
  });

});
