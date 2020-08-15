import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  state = {
    name: '',
    gender: 'male',
    description: '',
    confirm: '',
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleGenderChange = event => {
    this.setState({
      gender: event.target.value
    })
  }

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleConfirmChange = event => {
    this.setState({
      confirm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.gender, this.state.description);
  }

  render() {

    const title = (<div><h1>My Profile</h1></div>);

    const nameInput = (
      <div>
        <label htmlFor='name'>Name</label>
        <br />
        <input 
          type='text'
          size='25'
          id='name' 
          value={this.state.name} 
          onChange={this.handleNameChange}
          placeholder="Your name"
        ></input>
      </div>
    );

    const genderInput = (
      <div>
        <label htmlFor='gender'>Gender</label>
        <br />
        <select style={{width:220}} value={this.state.gender} name="gender" id="gender" onChange={this.handleGenderChange}>
          <option value="male">male</option>
          <option value="famale">famale</option>
        </select>
      </div>
    );

    const descTextArea = (
      <div>
        <label htmlFor='description'>Description</label>
        <br />
        <textarea 
          style={{width:220}}
          value={this.state.description}
          id='description' 
          name='description' 
          onChange={this.handleDescriptionChange} 
          placeholder='Description about yourself'>
        </textarea>
      </div>
    );

    const confirm = (
      <div>
        <label>
          <input type="checkbox" checked={this.state.confirm} id='confirm' name='confirm' onChange={this.handleConfirmChange}></input>
          i have read the terms of conduct
        </label>
      </div>
    );

    const submitBtn = (
      <div>
          <button className='btn btn-primary' type='submit'
            onClick={this.handleSubmit}
            disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.confirm} 
          >
              submit
          </button>
        </div>
    );

    return (
      <form className='app'>
        <br />
        {title}
        <br />
        {nameInput}
        {genderInput}
        {descTextArea}
        {confirm}
        {submitBtn}
      </form>
    );
  }
}

export default MyProfile;


