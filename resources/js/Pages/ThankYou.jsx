import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Thanks({ auth, customer }) {
    return (
        <GuestLayout
            auth={auth.user}
        >
            <Head title="Dashboard" />

            <div className="p-6 text-center text-gray-500 light:text-gray-100">Thanks for shoping {customer.name}</div>
            <div className="p-6 text-center text-gray-500 light:text-gray-100">you email is {customer.email}</div>
        </GuestLayout>
    );
}
