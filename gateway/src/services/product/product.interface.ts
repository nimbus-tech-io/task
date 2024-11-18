import { CreateProductRequest } from '../../dto/request/create-product.request';
import { UpdateProductRequest } from '../../dto/request/update-product.request';
import { ProductResponse } from '../../dto/response/product.response';

export interface IProductService {
  createProduct(req: CreateProductRequest): Promise<ProductResponse>;
  updateProduct(req: UpdateProductRequest): Promise<ProductResponse>;
  getProduct(id: string): Promise<ProductResponse>;
  getProducts(): Promise<ProductResponse[]>;
}
