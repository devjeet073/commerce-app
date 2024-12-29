import { Button } from '@headlessui/react';
import {
    ArrowDownIcon,
    ArrowsUpDownIcon,
    ArrowUpIcon,
} from '@heroicons/react/16/solid';
import Pagination from './Pagination';

export default function Table({ categories, toggleSort, sorting_order }) {
    console.log(categories);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                    />
                                    <label
                                        htmlFor="checkbox-all-search"
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Name
                                    <Button
                                        onClick={() =>
                                            toggleSort(
                                                'name',
                                                sorting_order.sort,
                                            )
                                        }
                                    >
                                        {sorting_order.sortColumnName ==
                                        'name' ? (
                                            sorting_order.sort == 'asc' ? (
                                                <ArrowUpIcon className="size-4 fill-white/60" />
                                            ) : (
                                                <ArrowDownIcon className="size-4 fill-white/60" />
                                            )
                                        ) : (
                                            <ArrowsUpDownIcon className="size-4 fill-white/60" />
                                        )}
                                    </Button>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.data.length > 0 ? (
                            categories.data.map((category, index) => (
                                <tr
                                    key={index}
                                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label
                                                htmlFor="checkbox-table-search-1"
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {category.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <button
                                            type="button"
                                            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            className="mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>
                                    <p className="mt-5 text-center">
                                        No records found
                                    </p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <nav
                    className="flex-column flex flex-wrap items-center justify-between pt-4 md:flex-row"
                    aria-label="Table navigation"
                >
                    {categories.data.length > 0 && (
                        <>
                            <span className="mb-4 block w-full text-sm font-normal text-gray-500 md:mb-0 md:inline md:w-auto dark:text-gray-400">
                                Showing{' '}
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    {categories.from}-{' '}
                                    {categories.data.length +
                                        (categories.from - 1)}
                                </span>{' '}
                                of{' '}
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    {categories.total}
                                </span>
                            </span>
                            <Pagination links={categories.links} />
                        </>
                    )}
                </nav>
            </div>
        </>
    );
}
