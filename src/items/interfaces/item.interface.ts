export interface Item {
    //question marks optional in interface, id provided by db
    id?: string;
    name: string; 
    description?: string;
    qty: number;
}