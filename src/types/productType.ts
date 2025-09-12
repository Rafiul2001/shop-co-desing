export type TReview = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export type TProduct = {
    id: number;
    title: string;
    price: number;
    rating: number;
    reviews: TReview[];
    description: string;
    images: string[];
}

export type TProductCardProps = {
    image: string;
    title: string;
    price: string | number;
    rating: number;
    reviews: TReview[]
    description?: string;
    onAddToCart?: () => void;
}