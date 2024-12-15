import Pagination from './Pagination';

export default function Table({ categories, onPageChange }) {
    console.log(categories.data.length);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex-column flex flex-wrap items-center justify-between space-y-4 pb-4 sm:flex-row sm:space-y-0">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 rtl:right-0">
                            <svg
                                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Search for category"
                        />
                    </div>
                </div>
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
                                    <a href="#">
                                        <svg
                                            className="ms-1.5 h-3 w-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
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
                                    1-10
                                </span>{' '}
                                of{' '}
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    1000
                                </span>
                            </span>
                            <Pagination
                                currentpage={categories.current_page}
                                from={categories.from}
                                last_page={categories.last_page}
                                onPageChange={onPageChange}
                            />
                        </>
                    )}
                </nav>
            </div>
        </>
    );
}
