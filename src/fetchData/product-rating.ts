export interface ProductRatingType {
    rate?: number;
    count?: number;
  }
  
  export const product_rating_json = (product: any): ProductRatingType => {
    return {
      rate: product?.rate ?? 0,
      count: product?.count ?? 0,
    };
  };
  