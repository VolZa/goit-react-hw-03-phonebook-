// import { Component } from 'react';
import PropTypes from 'prop-types'
import { Input } from './Filter.styled';

export const Filter = ({filter, onChangeInput}) => {
   return (
      <>
         <label>Find contacts by name<br/>
            <Input type="text" name='filter' value={filter}           
               onChange={onChangeInput}//f() змінить State.filter в App
            />
         </label>         
      </>
   ); 
} 

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   onChangeInput: PropTypes.func.isRequired //f дані з інпут в State
};
