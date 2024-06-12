/**  */

class FrienderApi {
  static token = null;



  static async uploadImage(imageFile) {
    const imageData = new FormData();
    imageData.append('image', imageFile);
    // TODO: Fix port number before pushing!
    const resp = await fetch('http://localhost:5001/uploadimage', {
      method: 'POST',
      body: imageData
    });
    const data = await resp.json();
    console.log(data);
  }

  /** Get token for login from user, password. */

  static async logIn(username, password) {
    const loginData = JSON.stringify({ username, password });

    const resp = await fetch('http://localhost:5001/token', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: loginData
    });
    const data = await resp.json();
    console.log(data);
  }

  /** Sign up for a site account and return a token. */

  static async signUp(newUserDetails) {
    const signupData = JSON.stringify(newUserDetails);

    const resp = await fetch('http://localhost:5001/token', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: signupData
    });
    const data = await resp.json();

    return data.token;
    console.log(data);
  }

  /** Save the current user's token on the class.  */
  static addToken(token) {
    FrienderApi.token = token;
  }
}

export default FrienderApi;