"use client";

import { useEffect, useState } from "react";

import { Advocate } from '@/lib/types/advocate';
import AdvocatesTable from '@/lib/components/advocatesTable';
import SearchBar from '@/lib/components/searchBar';
import { Header } from 'antd/es/layout/layout';

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e) => {
    const searchTerm = e.target.value;

    document.getElementById("search-term").innerHTML = searchTerm;

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience.includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <main className='my-6 mx-12'>
        <div className='flex flex-col items-start gap-4'>
            <SearchBar onChange={onChange} onClick={onClick} />
            <AdvocatesTable data={filteredAdvocates} loading={!filteredAdvocates.length} />
        </div>
    </main>
  );
}
