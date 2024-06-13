const BASE_URL = "http://localhost";
const PORT = "5000";
import { jwtDecode as decode } from "jwt-decode";

/**  */

class FrienderApi {
  static token = null;



  static async uploadImage(imageFile) {
    const imageData = new FormData();
    imageData.append('image', imageFile);
    // TODO: Fix port number before pushing!
    const resp = await fetch(`${BASE_URL}:${PORT}/uploadimage`, {
      method: 'POST',
      body: imageData
    });
    const data = await resp.json();
    console.log(data);
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

  /** Save the current user's token on the class.  */
  static addToken(token) {
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


  /** Get username from provided token. */
  static getUsername(token) {
    const { sub } = decode(token);
    return sub;
  }


}

export default FrienderApi;