"use client";

import { useState } from "react";

import AdvocatesTable from '@/lib/components/advocatesTable';
import SearchBar from '@/lib/components/searchBar';
import { useAdvocates } from '@/lib/hooks/useAdvocates';
import { SearchPaginationParams } from '@/lib/types/params';

export default function Home() {
  const [searchPagination, setSearchPagination] = useState<SearchPaginationParams>({ page: 1, pageSize: 10 });
  
  const { data: advocates, loading } = useAdvocates(searchPagination);

  const onPageChangeCallback = (page: number, pageSize: number) => {
    setSearchPagination({ ...searchPagination, page, pageSize });
  };

  const onSearchCallback = (query: string) => {
    setSearchPagination({ ...searchPagination, query });
  };

  const onResetCallback = () => {
    setSearchPagination({ ...searchPagination, query: '' });
  };

  return (
    <main className='my-6 mx-12'>
        <div className='flex flex-col items-start gap-4'>
            <SearchBar onSearch={onSearchCallback} onReset={onResetCallback} loading={loading} />
            <div className='w-full'>
                <AdvocatesTable 
                    tableData={advocates} 
                    loading={loading} 
                    paginationOptions={searchPagination} 
                    onPageChange={onPageChangeCallback} 
                />
            </div>
        </div>
    </main>
  );
}
