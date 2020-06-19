export class User {
  name: string;
  email: string;
  email_verified_at: string;
  postal_code: string;
  zip_code: string;
  phone: string;
  country: string;
  city: string;

  public getFirstName(): string {
    return this.name.split(' ')[0];
  }

  public getLastName(): string {
    return this.name.split(' ')[1];
  }
}
