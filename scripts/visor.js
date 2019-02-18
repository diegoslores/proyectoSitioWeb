function mapa() {
  let erase = `<div id="map"></div>`;
  document.querySelector(".imgVisor").innerHTML = erase;

  let map = L.map("map").setView([42.88, -8.54], 12.5);
  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(map);
  L.control.scale().addTo(map);
}

function relieve() {
  let erase = `<div id="map"></div>`;
  document.querySelector(".imgVisor").innerHTML = erase;

  let map = L.map("map").setView([42.88, -8.54], 12.5);

  L.tileLayer
    .wms("http://www.ign.es/wms-inspire/mapa-raster", {
      layers: "mtn_rasterizado",
      format: "image/png",
      transparent: false,
      continuousWorld: true,
      minZoom: 8,
      maxZoom: 18,
      attribution:
        '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
    })
    .addTo(map);

  L.control.scale().addTo(map);
}

function satelite() {
  let erase = `<div id="map"></div>`;
  document.querySelector(".imgVisor").innerHTML = erase;

  let map = L.map("map").setView([42.88, -8.54], 12.5);

  L.tileLayer
    .wms("http://www.ign.es/wms-inspire/pnoa-ma", {
      layers: "OI.OrthoimageCoverage",
      format: "image/png",
      transparent: true,
      minZoom: 8,
      maxZoom: 18,
      continuousWorld: true,
      attribution:
        'PNOA cedido por &copy; <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
    })
    .addTo(map);

  L.control.scale().addTo(map);
}

function americano() {
  let erase = `<div id="map"></div>`;
  document.querySelector(".imgVisor").innerHTML = erase;

  let map = L.map("map").setView([42.88, -8.54], 12.5);

  L.tileLayer
    .wms("http://www.ign.es/wms/pnoa-historico?", {
      layers: "AMS_1956-1957",
      format: "image/png",
      transparent: false,
      minZoom: 8,
      maxZoom: 18,
      attribution:
        'Voo americano 1956-1957 cedido por &copy; <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
    })
    .addTo(map);

  L.control.scale().addTo(map);
}

function catastro() {
  let erase = `<div id="map"></div>`;
  document.querySelector(".imgVisor").innerHTML = erase;

  let map = L.map("map").setView([42.88, -8.54], 14);

  L.tileLayer
    .wms("http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?", {
      layers: "Catastro",
      format: "image/jpeg",
      transparent: true,
      version: "1.1.1",
      attribution: "DIRECCION GENERAL DEL CATASTRO"
    })
    .addTo(map);

  L.control.scale().addTo(map);
}
