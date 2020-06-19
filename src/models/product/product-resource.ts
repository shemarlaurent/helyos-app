import {Product} from "./product";

export class ProductResource {
  current_page: number;
  data: Array<Product>;
  first_page_url: string;
  from: string;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;

  public product() {
    return this.data;
  }

}
