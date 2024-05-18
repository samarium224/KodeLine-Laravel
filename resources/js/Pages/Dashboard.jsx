import OrderTable from '@/Components/OrderTable';
import UserDetail from '@/Components/UserDetails';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, Userproducts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl ml-4 text-gray-800 light:text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white light:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <UserDetail user={auth.user}></UserDetail>
                    </div>
                </div>
            </div>

            {/* <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white light:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 light:text-gray-100">Your purchased products will appear here</div>
                        <OrderTable Orderdata={Userproducts}></OrderTable>
                    </div>
                </div>
            </div> */}

        </AuthenticatedLayout>
    );
}
