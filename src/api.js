const BASE_URL = "http://localhost";
const PORT = "5001";
import { jwtDecode as decode } from "jwt-decode";

/**  */

class FrienderApi {
  static token = null;


  // TODO: research exactly how FormData works
  static async uploadImage(imageFile) {
    const imageData = new FormData();
    imageData.append('image', imageFile);

    const headers = {
      authorization: `${FrienderApi.token}`,
    };

    const resp = await fetch(`${BASE_URL}:${PORT}/uploadimage`, {
      method: 'POST',
      headers: headers,
      body: imageData
    });
    const data = await resp.json();
    console.log(data);
    return data.url;
  }

  /** Get token for login from user, password. */

  static async logIn(username, password) {
    const loginData = JSON.stringify({ username, password });

    const resp = await fetch(`${BASE_URL}:${PORT}/token`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: loginData
    });

    const data = await resp.json();
    console.log(data);
    return data.token;
  }

  /** Sign up for a site account and return a token. */

  static async signUp(newUserDetails) {
    const signupData = JSON.stringify(newUserDetails);

    const resp = await fetch(`${BASE_URL}:${PORT}/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: signupData
    });
    const data = await resp.json();

    console.log(data);
    return data.token;
  }

  /** Update the current token on the class.  */
  static updateToken(token) {
    FrienderApi.token = token;
  }

  /** Get user from database. */
  static async getUser(username) {

    const headers = {
      authorization: `${FrienderApi.token}`,
    };

    const resp = await fetch(`${BASE_URL}:${PORT}/users/${username}`, {
      headers: headers
    });

    const data = await resp.json();

    console.log(data);
    return data.user;
  }

  /** Get list of other users from database. */
  static async getOtherUsers() {
    const headers = {
      authorization: `${FrienderApi.token}`,
    };

    const resp = await fetch(`${BASE_URL}:${PORT}/users`, {
      headers: headers
    });

    const data = await resp.json();

    console.log(data);
    return data.users;
  }

  /** Get username from provided token. */
  static getUsername(token) {
    const { username } = decode(token);
    return username;
  }


  /** Update a user's list of liked users. */
  static async addLike(username) {
    const headers = {
      authorization: `${FrienderApi.token}`,
    };

    const resp = await fetch(`${BASE_URL}:${PORT}/users/like/${username}`);

    const data = await resp.json();
    return data.msg;
  }
}

export default FrienderApi;