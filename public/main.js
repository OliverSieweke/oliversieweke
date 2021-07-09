console.log(L);

const map = L.map("map").setView([52.3676, 4.9041], 13);

map.locate({ watch: true });

map.on("locationfound", (event) => {
  var radius = event.accuracy * 2;

  L.circle(event.latlng, radius).addTo(map);
  console.log("event:\t", event);
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoib2xpdmVyc2lld2VrZSIsImEiOiJja24yNm93aHcxNG12Mm90Nzk1aDMzbG01In0.W5z-cZJMwvrdywELIpVy7Q\n",
  }
).addTo(map);

getCaches();

async function getCaches() {
  const app = new Realm.App({ id: "narayanin-mvhku" });
  const credentials = Realm.Credentials.anonymous();
  const user = await app.logIn(credentials);
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const cachesCollection = mongodb.db("caches").collection("caches");
  const caches = await cachesCollection.find();

  console.log("caches:\t", caches);

  for (const [
    index,
    { latitude, longitude, title, description, special },
  ] of caches.entries()) {
    const dot = L.icon({
      iconUrl: "dot.png",
      iconSize: [20, 20], // size of the icon
      iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
    });
    const marker = L.marker([latitude, longitude], {
      ...(special ? { icon: dot } : {}),
    }).addTo(map);
    marker.bindPopup(
      `<span style="font-weight: bold;">${title}<span><br><p>${description}</p>`
    );
    // if(index === 0) {
    //     marker.openPopup()
    // }
  }
}
