"use client";

import { useState } from "react";

import AdvocatesTable from '@/lib/components/advocatesTable';
import SearchBar from '@/lib/components/searchBar';
import { useAdvocates } from '@/lib/hooks/useAdvocates';
import { PaginationOptions } from '@/lib/types/pagination';

export default function Home() {
  const [paginationOptions, setPaginationOptions] = useState<PaginationOptions>({ page: 1, pageSize: 10 });
  
  const { data: advocates, loading } = useAdvocates(paginationOptions);

  const onPageChangeCallback = (page: number, pageSize: number) => {
    setPaginationOptions({ page, pageSize });
  };

  const onChange = (e) => {
    // const searchTerm = e.target.value;

    // document.getElementById("search-term").innerHTML = searchTerm;

    // console.log("filtering advocates...");
    // const filteredAdvocates = advocates.filter((advocate) => {
    //   return (
    //     advocate.firstName.includes(searchTerm) ||
    //     advocate.lastName.includes(searchTerm) ||
    //     advocate.city.includes(searchTerm) ||
    //     advocate.degree.includes(searchTerm) ||
    //     advocate.specialties.includes(searchTerm) ||
    //     advocate.yearsOfExperience.includes(searchTerm)
    //   );
    // });

    // setFilteredAdvocates(filteredAdvocates);s
  };

  const onClick = () => {
    // console.log(advocates);
    // setFilteredAdvocates(advocates);
  };

  return (
    <main className='my-6 mx-12'>
        <div className='flex flex-col items-start gap-4'>
            <SearchBar onChange={onChange} onClick={onClick} loading={loading} />
            <AdvocatesTable 
                tableData={advocates} 
                loading={loading} 
                paginationOptions={paginationOptions} 
                onPageChange={onPageChangeCallback} 
            />
        </div>
    </main>
  );
}
