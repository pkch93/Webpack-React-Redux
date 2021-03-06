import React, {Component} from "react";

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      pick: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handlePickChange(e) {
    this.setState({
      pick: e.target.value
    });
  }
  handleSubmit(e) {
    alert("summited : " + this.state.value);
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
