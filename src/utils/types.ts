export interface Sale {
    weekEnding: Date,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

export interface Review {
    customer: string,
    review: string,
    score: number
}

export interface MockData {
    id: string,
    title: string,
    image: string,
    subtitle: string,
    brand: string,
    reviews: Review[],
    retailer: string,
    details: string[],
    tags: string[],
    sales: Sale[]
}