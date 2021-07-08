console.log(L)

const map = L.map('map').setView([52.3676, 4.9041], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2xpdmVyc2lld2VrZSIsImEiOiJja24yNm93aHcxNG12Mm90Nzk1aDMzbG01In0.W5z-cZJMwvrdywELIpVy7Q\n'
}).addTo(map);


getCaches()

async function getCaches() {
    const app = new Realm.App({ id: "narayanin-mvhku"});
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const cachesCollection = mongodb.db("caches").collection("caches");
    const caches = await cachesCollection.find()

    for(const [index, {latitude, longitude, title, description}] of caches.entries()) {

        const marker = L.marker([latitude, longitude]).addTo(map)
        marker.bindPopup(`<span style="font-weight: bold;">${title}<span><br><p>${description}</p>`)
        if(index === 0) {
            marker.openPopup()
        }
    }
}
