import { RESTDataSource } from 'apollo-datasource-rest';

export default class PurchasesAPI extends RESTDataSource {
  baseURL = process.env.PURCHASES_API_URI || '';

  async create(purchase) {
    return await this.post(`/purchases/`, purchase);
  }
  async getPurchases() {
    return await this.get(`/purchases/list/`);
  }
  async getById(purchaseId) {
    return await this.get(`/purchases/${purchaseId}/`);
  }
  async getByUserId(userId) {
    return await this.get(`/purchases/list/${userId}/`);
  }
  // async update(purchaseId, purchase) {
  //   return await this.put(`/purchases/${purchaseId}`, purchase);
  // }
  // async delete(purchaseId) {
  //   return await this.delete(`/purchases/${purchaseId}`);
  // }
}
