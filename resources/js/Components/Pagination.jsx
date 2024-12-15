export default function Pagination({
    currentpage,
    from,
    last_page,
    onPageChange,
}) {
    const pages = Array.from(
        { length: last_page - from + 1 },
        (_, i) => from + i,
    );

    return (
        <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
            <li>
                <button
                    onClick={() => onPageChange(page - 1)}
                    className={`ms-0 ${currentpage > from ? '' : 'cursor-not-allowed'} flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                    {currentpage > from ? 'Previous' : '-'}
                </button>
            </li>

            {pages.map((page) => (
                <li key={page}>
                    <button
                        onClick={() => onPageChange(page)}
                        className={
                            page === currentpage
                                ? 'flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                : 'flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        }
                    >
                        {page}
                    </button>
                </li>
            ))}

            <li>
                <button
                    onClick={() => onPageChange(currentpage + 1)}
                    className={`flex h-8 ${currentpage < last_page ? '' : 'cursor-not-allowed'} items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                    disabled
                >
                    {currentpage < last_page ? 'Next' : '-'}
                </button>
            </li>
        </ul>
    );
}
