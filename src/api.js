/**  */

class FrienderApi {
  static token = null;

  static async uploadImage(imageFile) {
    const imageData = new FormData();
    imageData.append('image', imageFile);
    const resp = await fetch('http://localhost:5000/uploadimage', {
      method: 'POST',
      body: imageData
    });
    const data = await resp.json();
    console.log(data);
  }

  static async getToken(username, password) {
    const loginData = JSON.stringify({ username, password });

    const resp = await fetch('http://localhost:5000/token', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: loginData
    });
    const data = await resp.json();
    console.log(data);
  }
}

export default FrienderApi;