import { json_Product_Data } from "./product-data";


export const fetch_product_data = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  if (response.ok) {
    const pdData = await response.json();
    return pdData?.map((pd: any) => {
      return json_Product_Data(pd);
    });
  } else {
    throw new Error("Something went wrong");
  }
};

export const fetch_pd_by_id = async ({ id }: { id: number }) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (response.ok) {
    const pdDetails = await response.json();
    return json_Product_Data(pdDetails);
  } else {
    throw new Error("Something went wrong");
  }
};
