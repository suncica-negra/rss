export const getDataFromFeed = {
  readFromAPI(apiUrl, that) {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    that.$axios
      .get(CORS_PROXY + apiUrl)
      .then((response) => {
        var xmlFile = response.data;
        parseFetchedData.getData(xmlFile, that);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const parseFetchedData = {
  getData(xmlFile, that) {
    var parseString = require("xml2js").parseString;
    parseString(xmlFile, async function (err, result) {
      err && console.log("Error in parsing data");
      return (that.feedsData = result.rss.channel[0].item);
    });
  }
}
