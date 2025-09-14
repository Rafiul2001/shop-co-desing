import { useParams } from "react-router"

const ViewProduct: React.FC = () => {
    const { productId } = useParams<{ productId: string }>()
    return (
        <div>ViewProduct: {productId}</div>
    )
}

export default ViewProduct