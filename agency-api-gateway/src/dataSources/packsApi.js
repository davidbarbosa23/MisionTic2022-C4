import { RESTDataSource } from 'apollo-datasource-rest';

export default class PacksAPI extends RESTDataSource {
  baseURL = process.env.PACKS_API_URI || '';

  async create(pack) {
    return await this.post(`/packs/`, pack);
  }
  async getPacks() {
    return await this.get(`/packs/`);
  }
  async getById(packId) {
    return await this.get(`/packs/${packId}`);
  }
  async update(packId, pack) {
    return await this.put(`/packs/${packId}`, pack);
  }
  async updateStatus(packId, isActive) {
    return await this.put(`/packs/${packId}`, { isActive });
  }
  async delete(packId) {
    return await this.delete(`/packs/${packId}`);
  }
}
