import React from 'react'

import { Button, Input, InputRef } from 'antd';

const { Search } = Input;

type Props = {
    onSearch: (value: string) => void;
    onReset: () => void;
    loading: boolean;
};

function SearchBar({ onSearch, onReset, loading }: Props) {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const resetSearchInput = () => {
    setSearchTerm('');
    onReset();
  };
  
  return (
    <div className='inline-flex flex-row gap-1'>
        <Search 
          aria-label="Search advocates"
          placeholder="input search text" 
          enterButton="Search" 
          size="middle"
          disabled={loading}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={onSearch}
        />
        <Button 
          aria-label="Reset search"
          variant='solid' 
          color='danger'
          disabled={loading}
          onClick={resetSearchInput}
        > Reset Search
        </Button>
    </div>
  )
}

export default SearchBar;