interface Address {
    street: string;
    zip: string;
    city: string;
    country: string;
  }
  
  export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthday: string;
    website: string;
    image: string;
    address: Address;
  }

  export interface Data{
    id: number;
    name: string;
    email: string;
    phone: string;
    birthday: string;
    website: string;
    image: string;
    street: string;
    zip: string;
    city: string;
    country: string;
  }