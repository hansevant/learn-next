import AddProduct from "./addProduct"
import DeleteProduct from "./deleteProduct"
import EditProduct from "./editProduct"

type Product = {
    id:number
    title:string
    price:number
}

async function getProduct() {
    const res = await fetch('http://localhost:5000/products',{
        cache: 'no-store',
    })
    return res.json()
}

export default async function ProductList() {
    const products: Product[] = await getProduct()
  return (
    <div className="p-10">
        <div className="flex justify-between">

        <h2>ProductList :</h2>
        <div className="py-2">
        </div>
            <AddProduct />
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
        {products.map((product, index)=>(
            <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td className="flex space-x-3">
                    <EditProduct {...product} />
                    <DeleteProduct {...product} />
                </td>
            </tr>
            ))}
            </tbody>
            </table>
    </div>
  )
}
