import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ categories }) {
    const [currentPage, setCurrentPage] = useState(categories.current_page);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        console.log('Page changed to:', page);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Category Page is : {currentPage}
                </h2>
            }
        >
            <Head title="Category" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="relative overflow-x-auto p-4 shadow-md sm:rounded-lg">
                                <Table
                                    categories={categories}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
