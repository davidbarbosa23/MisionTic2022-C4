import { RESTDataSource } from 'apollo-datasource-rest';

export default class AuthUsersAPI extends RESTDataSource {
  baseURL = process.env.AUTHUSERS_API_URI || '';

  willSendRequest(request) {
    if (this.context.token) request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async create(user) {
    return await this.post(`/register/`, user);
  }
  async getUsers() {
    return await this.get(`/user/`);
  }
  async getById(userId) {
    return await this.get(`/user/${userId}`);
  }
  async login(credentials) {
    return await this.post(`/login/`, credentials);
  }
  async refresh(token) {
    return await this.post(`/refresh/`, { refresh: token });
  }
}
