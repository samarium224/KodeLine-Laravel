export default function OrderTable({ Orderdata }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Order ID</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product Title</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Quantity</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {Orderdata.map((order) => (
                        <tr key={order.order_id} className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <img className="w-20" src={order.imgUrl} alt={order.imgUrl} />

                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.order_id}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.product_name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.total_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.product_quantity}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
