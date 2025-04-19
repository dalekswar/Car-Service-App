export interface ServiceItem {
    id: number;
    title: string;
    price: number;
}

export interface RepairOrder {
    id: number;
    date: string;
    time: string;
    services: string[];
    status: string;
}
