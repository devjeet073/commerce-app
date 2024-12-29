import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ categories, filter }) {
    const [search, setSearch] = useState(filter.search ?? '');
    const [sorting_order, setSortingOrder] = useState({
        sortColumnName: filter.sort.columnName,
        sort: filter.sort.type,
    });

    const resetFilter = () => {
        setSearch((prev) => prev + '');
        setSortingOrder((prev) => ({
            ...prev,
            sortColumnName: 'name',
            sort: 'desc',
        }));
        console.log('search', search, 'sorting_order', sorting_order);

        filterApi();
    };

    const toggleSort = (columnName, sort = 'desc') => {
        setSortingOrder({
            sortColumnName: columnName,
            sort: sort == 'asc' ? 'desc' : 'asc',
        });
        filterApi();
    };

    const handleSearch = (search) => {
        setSearch(search);
        filterApi();
    };

    const filterApi = () => {
        router.get(
            '/category',
            {
                search: search,
                sortColumnName: sorting_order.sortColumnName,
                sort: sorting_order.sort,
            },
            { preserveState: true, preserveScroll: true, replace: true },
        );
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Category Lists
                </h2>
            }
        >
            <Head title="Category" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="relative overflow-x-auto p-4 shadow-md sm:rounded-lg">
                                <div className="flex-column flex flex-wrap items-center justify-between space-y-4 pb-4 sm:flex-row sm:space-y-0">
                                    <label
                                        htmlFor="table-search"
                                        className="sr-only"
                                    >
                                        Search
                                    </label>
                                    <div className="relative flex">
                                        <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 rtl:right-0">
                                            <MagnifyingGlassIcon className="size-5 fill-white/60" />
                                        </div>
                                        <input
                                            type="text"
                                            id="table-search"
                                            className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="Search for category"
                                            value={search}
                                            onChange={(e) =>
                                                handleSearch(e.target.value)
                                            }
                                        />
                                        <div className="ml-2">
                                            <button
                                                type="button"
                                                className="mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                onClick={resetFilter}
                                            >
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Table
                                    categories={categories}
                                    toggleSort={toggleSort}
                                    sorting_order={sorting_order}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
