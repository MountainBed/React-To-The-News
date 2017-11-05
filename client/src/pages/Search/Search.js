import React, { Component } from "react";
import Results from "../../components/Results";
import { FormBtn, Number, Term } from "../../components/Form";
import API from "../../utils/API";

class Search extends Component {
	
	state = {
		searchTerm: "",
		numberRetrieve: ""
	};
	
	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.searchTerm && this.state.numberRetrieve) {
			API.articleQuery({
				searchTerm: this.state.searchTerm
			})
			.then(res => console.log(res.data.response.docs))
			.catch(err => console.log(err));
		}
	};
	
	render() {
		return (
			<div className = "container">
				<form>
					<Term
						defaultValue = {this.state.searchTerm}
						onChange = {this.handleInputChange}
						name = "searchTerm"
						placeholder = "Pokemon attack"
					/>
					<Number
						defaultValue = {this.state.numberRetrieve}
						onChange = {this.handleInputChange}
						name = "numberRetrieve"
					/>
					<FormBtn
						disabled={!(this.state.searchTerm && this.state.numberRetrieve)}
						onClick = {this.handleFormSubmit}
					>
					Submit
					</FormBtn>
				</form>
				<Results />
			</div>
		);
	}
}

export default Search;