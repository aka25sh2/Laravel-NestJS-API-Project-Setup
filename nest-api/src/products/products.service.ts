import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProductsService {
  private baseUrl = 'http://laravel-api.test/api/products';

  async getAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }
}
