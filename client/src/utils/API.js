var axios = require("axios");

export default {
	articleQuery: function (searchTerm) {
		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ccdc793e19864c398911105fc5da993e&?q=" + searchTerm);
	},
	saveArticle: function(articleData) {
		return axios.post("/api/article/", articleData);
	},
	getArticles: function() {
		return axios.get("/api/article");
	},
	deleteArticle: function(id) {
		return axios.delete("/api/article/" + id);
	}
}

