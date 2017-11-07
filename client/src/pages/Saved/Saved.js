import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

class Saved extends Component {
	
	state = {
		articles: []
	};
	
	componentDidMount() {
		this.findArticles();
	};

	findArticles = () => {
		API.getArticles({})
		.then(res =>
			this.setState({
				articles: res.data
			})
		)
		.catch(err => console.log(err));
	};

	removeArticle = id => {
		API.deleteArticle(id)
		.then(res => this.findArticles())
		.catch(err => console.log(err));
	};
	
	render() {
		return (
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
										<a href={article.url} target="_blank">
											<strong>
												{article.headline}
											</strong>
										</a>
										<DeleteBtn 
										onClick = {() => this.removeArticle(article._id)}
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
		);
	}
}

export default Saved;