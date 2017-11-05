var axios = require("axios");

export default {
	articleQuery: function (searchTerm) {
		console.log(searchTerm);
		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ccdc793e19864c398911105fc5da993e&?q=" + searchTerm);
	}
}

