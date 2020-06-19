export class Product {
  id: string;
  brand: string;
  name: string;
  slug: string;
  price: string;
  sku: string;
  description: string;
  variations: Array<object>;
  images: Array<object>;
  created_at: string;
  updated_at: string;

  public getProductName() {
    return this.name.split(' ').splice(0, 2).join(' ') + '...'
  }

}
