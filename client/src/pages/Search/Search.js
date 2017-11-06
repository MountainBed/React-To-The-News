import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import { FormBtn, Number, Term } from "../../components/Form";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";

class Search extends Component {
	
	state = {
		searchTerm: "",
		numberRetrieve: "",
		articles: []
	};

	componentDidMount() {
    this.setState({
			numberRetrieve: "1"
		});
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

	addArticle = (url, headline, snippet) => {
		if (headline) {
			API.saveArticle({
				headline: headline,
				url: url,
				snippet: snippet
			})
			.then(res => console.log("Saved."))
			.catch(err => console.log(err));
		}
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
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Results</h3>
						</div>
					<div className="panel-body">
						{this.state.articles.length ? (
              <List>
                {this.state.articles.map((article, i) => {
                  return (
                    <ListItem key = {i}>
                      <a href={article.web_url} target="_blank">
                        <strong>
                          {article.headline.main}
                        </strong>
                    	</a>
                      <SaveBtn 
												onClick = {() => this.addArticle(article.web_url, article.headline.main, article.snippet)}
											/>
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