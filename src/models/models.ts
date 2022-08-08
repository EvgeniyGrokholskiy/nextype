export interface ICategories {
    id: number;
    name: string;
}

export interface ICardTag {
    id: number;
    name: string;
}

export interface ICardData {
    id: number;
    categoryId: number;
    name: string;
    image: string;
    description: string;
    url: string;
    tags: ICardTag[];
}