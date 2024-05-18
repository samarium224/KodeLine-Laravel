import DefaultPageLayout from '@/Layouts/DefaultPageLayout';
import { Head } from '@inertiajs/react';

export default function Thanks({ auth, customer }) {
    return (
        <DefaultPageLayout
            auth={auth}
        >
            <Head title="Dashboard" />

            <div className="text-2xl p-6 text-center text-gray-500 light:text-gray-100">Thanks for shoping {customer.name}</div>
        </DefaultPageLayout>
    );
}
