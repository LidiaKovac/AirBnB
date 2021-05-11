import React from "react";
import "./SearchForm.scss";
import { IoSearch } from "react-icons/io5";

class SearchForm extends React.Component {
  state = {
    query: '',
    dateStart: '',
    dateEnd: '',
    guests: 0
  }
  componentDidUpdate(){
    console.log(this.state)
  }
  render() {
    return (
      <div className="search-form-component">
        <div className="location-form">
        <div className='title-form ml-3'>Location</div>
          <input className="input-form ml-3" type="text" placeholder='Where are you going?' onChange={(e)=> this.setState({query: e.currentTarget.value})} />
        </div>
        <div className="check-in-form">
        <div className='title-form'>Check-in</div>
          <input className="input-form" type="date" onChange={(e)=> this.setState({dateStart: e.currentTarget.value})} />
        </div>
        <div className="check-out-form">
        <div className='title-form'>Check-out</div>
          <input className="input-form" type="date" onChange={(e)=> this.setState({dateEnd: e.currentTarget.value})} />
        </div>
        <div className="guests-form">
        <div className='title-form'>Guests</div>
          <input className="input-form" type="number" placeholder='Add guests' onChange={(e)=> this.setState({guests: e.currentTarget.value})} />
        </div>
        <div className="search-btn" onClick={()=>this.props.getData(this.state.query)}>
            <IoSearch className="search-icon" />
         
        </div>
      </div>
    )

  }
}
export default SearchForm;
