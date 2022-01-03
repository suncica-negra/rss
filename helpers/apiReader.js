import Swal from "sweetalert2";
import { XML } from "./xmlfile.js";

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
        if (error.message === "Network Error" || error.message === "Request failed with status code 403") {
          swal.swalErrorResponseHandler(error.message, that)
        } else {
          that.error = true;
          that.loading = false;
        }
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

export const swal = {
  swalErrorResponseHandler(error, that) {
    Swal.fire({
      icon: "info",
      title: error,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Imam dopuštenje s gornjeg linka',
      denyButtonText: `Ne, prikaži demo`,
      cancelButtonText: 'Odustani',
      html: `<p style="font-family:Quicksand,sans-serif;">
        Da bi mogli čitati s 24sata RSS servisa morate imati dopuštenje. Da bi dobili dopuštenje odaberite 
        <b style="display:block;">Da, idi i potvrdi pristup</b> Na stranici koja vam se otvori kliknite na 
        <b style="display:block;">Request temporary access to the demo server</b> 
        Zatim se vratite ovdje i odaberite <b style="display:block;">Imam dopuštenje s gornjeg linka</b>.
        </p><button type="button" class="swal2-confirm swal2-styled" style="display:inline-block;">
        <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" 
        style="color:white;font-family:Quicksand,sans-serif;">Da, idi i potvrdi pristup</a></button>`
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      } else if (result.isDenied) {
        that.error = false;
        that.loading = false;
        parseFetchedData.getData(XML, that);
        Swal.fire('Prikazuju se stare vijesti', '', 'info')
      } else {
        that.error = true;
        that.loading = false;
      }
    });
  }
}
