export const getDataFromFeed = {
  readFromAPI(apiUrl, that) {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    that.$axios
      .get(CORS_PROXY + `https://www.24sata.hr/feeds/${apiUrl}.xml`)
      .then((response) => {
        var xmlFile = response.data;
        parseFetchedData.getData(xmlFile, that);
      })
      .catch((error) => {
        console.log(error);
        that.error = true;
        that.loading = false;
      });
  }
}

export const parseFetchedData = {
  getData(xmlFile, that) {
    var parseString = require("xml2js").parseString;
    parseString(xmlFile, async function (err, result) {
      if (err) {
        console.log("Error in parsing data.", err),
          that.error = true,
          that.loading = false
      } else {
        return (
          that.feedsData = result?.rss?.channel[0]?.item,
          that.error = false,
          that.loading = false
        );
      }
    });
  }
}
