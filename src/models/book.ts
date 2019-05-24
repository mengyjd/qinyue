import { getFeatureBooks } from '../api/book'

export default class BookModel {
  constructor() {}

  async getFeatureBooks() {
    return getFeatureBooks()
  }
}
