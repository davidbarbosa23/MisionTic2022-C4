import jwtDecode from 'jwt-decode';

class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.refresh;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.access;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem('user'));
    user.access = token;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getUserId() {
    const token = JSON.parse(localStorage.getItem('user') || null)?.access;
    return token ? jwtDecode(token).user_id : null;
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}

export default new TokenService();
