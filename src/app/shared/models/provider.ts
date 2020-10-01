export class Provider {
    id: number;
    name: string;
    fantasyName: string;
    email: string;
    document: string;
    address: {
        street: string;
        city: string;
        uf: string;
        cep: string;
        geo: {
        lat: string;
        lng: string;
        };
    };
    phone: string;
    website: string;
    }