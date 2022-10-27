import { React } from 'react';
import { FilterForm } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleSearch = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterForm>
      <label>
        Find contact by Name <br />
        <input
          type="text"
          name="search"
          value={filter}
          onChange={handleSearch}
        ></input>
      </label>
    </FilterForm>
  );
};

export default Filter;
