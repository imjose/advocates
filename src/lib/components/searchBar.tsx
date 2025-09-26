import React from 'react'

import { Button, Input } from 'antd';

const { Search } = Input;

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

function SearchBar({ onChange, onClick }: Props) {
  return (
    <div className='inline-flex flex-row gap-1'>
        <Search 
          aria-label="Search advocates"
          placeholder="input search text" 
          enterButton="Search" 
          size="middle" 
          loading
          onChange={onChange} 
        />
        <Button 
          aria-label="Reset search"
          variant='solid' 
          color='danger' 
          onClick={onClick}
        > Reset Search
        </Button>
    </div>
  )
}

export default SearchBar