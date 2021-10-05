class Github {
  constructor() {
    this.client_id = "79d4badcaef41edd94c2";
    this.client_secret = "8b3c4ae22b4dbcb0668091e5a6bdb011ec53ee0c";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
