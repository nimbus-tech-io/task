import { IProductService } from './product.interface';
import { environment } from '../../config/environment';
import axios from 'axios';
import { CreateProductRequest } from '../../dto/request/create-product.request';
import { ProductResponse } from '../../dto/response/product.response';
import { UpdateProductRequest } from '../../dto/request/update-product.request';

export const getProductService = (): IProductService => {
  return {
    createProduct,
    updateProduct,
    getProduct,
    getProducts,
  };
};

const createProduct = async (request: CreateProductRequest): Promise<ProductResponse> => {
  const { data } = await axios.get(`${environment.productServiceUrl}/api/products`, { data: request });
  return data as ProductResponse;
};

const updateProduct = async (request: UpdateProductRequest): Promise<ProductResponse> => {
  const { data } = await axios.get(`${environment.productServiceUrl}/api/products`, { data: request });
  return data as ProductResponse;
};

const getProduct = async (id: string): Promise<ProductResponse> => {
  const { data } = await axios.get(`${environment.productServiceUrl}/api/products/${id}`);
  return data as ProductResponse;
};

const getProducts = async (): Promise<ProductResponse[]> => {
  const { data } = await axios.get(`${environment.productServiceUrl}/api/products`);
  return data as ProductResponse[];
};
