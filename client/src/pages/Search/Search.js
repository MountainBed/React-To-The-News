import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import { FormBtn, Number, Term } from "../../components/Form";
import API from "../../utils/API";

class Search extends Component {
	
	state = {
		searchTerm: "",
		numberRetrieve: "",
		articles: []
	};
	
	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
	};
	
	updateArticleList = article => {
		let truncArticles = article.splice(0,this.state.numberRetrieve);
		this.setState({
			articles: truncArticles
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.searchTerm && this.state.numberRetrieve) {
			API.articleQuery({
				searchTerm: this.state.searchTerm
			})
			.then(res => this.updateArticleList(res.data.response.docs))
			.catch(err => console.log(err));
		}
	};
	
	render() {
		return (
			<div>
				<div className = "container">
					<form>
						<Term
							defaultValue = {this.state.searchTerm}
							onChange = {this.handleInputChange}
							name = "searchTerm"
							placeholder = "Pokemon attack"
						/>
						<Number
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
				</div>
				<br />
				<div className = "container">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Results</h3>
						</div>
					<div class="panel-body">
						{this.state.articles.length ? (
              <List>
                {this.state.articles.map(function(article, i){
                  return (
                    <ListItem key = {i}>
                      <a href={article.web_url}>
                        <strong>
                          {article.headline.main}
                        </strong>
                    	</a>
                      <button className = "pull-right">
												Save!
											</button>
											<p>
												{article.snippet}
											</p>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Search;