import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    return (
        <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
            {links.map((link, index) => (
                <li key={index}>
                    {link.url !== null ? (
                        <Link
                            href={link.url}
                            className={
                                link.active
                                    ? 'flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                    : 'flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                            }
                            preserveScroll
                        >
                            {link.label}
                        </Link>
                    ) : (
                        <button
                            className={`ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                            {link.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
}
