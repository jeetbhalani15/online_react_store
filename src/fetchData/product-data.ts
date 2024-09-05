import { ProductRatingType, product_rating_json } from "./product-rating";

  export interface ProductDataType {
    id?: number;
    category?: string;
    description?: string;
    image?: string;
    price?: number;
    rating?: ProductRatingType;
    title?: string;
  }
  
  export const json_Product_Data = (product: any): ProductDataType => {
    return {
      id: product?.id ?? null,
      category: product?.category ?? "",
      description: product?.description ?? "",
      image: product?.image ?? "",
      price: product?.price ?? 0,
      rating: product?.rating ? product_rating_json(product.rating) : {},
      title: product?.title ?? "",
    };
  };
  