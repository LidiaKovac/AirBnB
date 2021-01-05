import React from "react";
import "../styling/SearchForm.scss";
import { IoSearch } from "react-icons/io5";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="search-form-component">
        <div className="location-form">
        <div className='title-form ml-3'>Location</div>
          <input className="input-form ml-3" type="text" placeholder='Where are you going?' />
        </div>
        <div className="check-in-form">
        <div className='title-form'>Check-in</div>
          <input className="input-form" type="date" />
        </div>
        <div className="check-out-form">
        <div className='title-form'>Check-out</div>
          <input className="input-form" type="date" />
        </div>
        <div className="guests-form">
        <div className='title-form'>Guests</div>
          <input className="input-form" type="number" placeholder='Add guests' />
        </div>
        <div className="search-btn">
            <IoSearch className="search-icon" />
         
        </div>
      </div>
    );
  }
}
export default SearchForm;
