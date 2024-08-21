interface ProductProp {
    params: {
        id: string;
    };
}

export default function Product({ params } : ProductProp) {
    return (
        <div>
            <p>Product id: {params.id}</p>
        </div>
    )
}