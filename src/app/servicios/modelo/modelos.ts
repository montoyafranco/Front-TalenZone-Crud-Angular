export interface Producto {
    name: string;
    inInventory: number;
    enabled: string;
    min: number;
    max: number;
}


    export interface ProductoVenta {
        name: string;
        quantity: number;
    }

    export interface Venta {
        
        id: number;
        idType: string;
        clientName: string;
        products: ProductoVenta[];
    }

