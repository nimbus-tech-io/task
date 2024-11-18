import { NextFunction, Request, Response, Router } from 'express';
import { CreateProductRequest } from '../dto/request/create-product.request';
import { getProductService } from '../services/product/product.service';
import { ProductResponse } from '../dto/response/product.response';
import { UpdateProductRequest } from '../dto/request/update-product.request';

const router = Router({ mergeParams: true });

router.post('/', async (req: Request<void, void, CreateProductRequest, {}>, res: Response, next: NextFunction) => {
  getProductService()
    .createProduct(req.body)
    .then((response: ProductResponse) => res.send(response))
    .catch(next);
});

router.put('/', async (req: Request<void, void, UpdateProductRequest, {}>, res: Response, next: NextFunction) => {
  getProductService()
    .updateProduct(req.body)
    .then((response: ProductResponse) => res.send(response))
    .catch(next);
});

router.get('/', async (_: Request<void, void, void, {}>, res: Response, next: NextFunction) => {
  getProductService()
    .getProducts()
    .then((response: ProductResponse[]) => res.send(response))
    .catch(next);
});

router.get('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  getProductService()
    .getProduct(req.params.id)
    .then((response: ProductResponse) => res.send(response))
    .catch(next);
});

export default router;
