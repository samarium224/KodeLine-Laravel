import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 light:border-indigo-600 text-gray-900 light:text-gray-100 focus:border-indigo-700 '
                    : 'border-transparent text-gray-500 light:text-gray-400 hover:text-gray-700 light:hover:text-gray-300 hover:border-gray-300 light:hover:border-gray-700 focus:text-gray-700 light:focus:text-gray-300 focus:border-gray-300 light:focus:border-gray-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
