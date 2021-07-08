getCaches();

async function getCaches() {
  const app = new Realm.App({ id: "narayanin-mvhku" });
  const credentials = Realm.Credentials.anonymous();
  const user = await app.logIn(credentials);
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const cachesCollection = mongodb.db("caches").collection("caches");
  const caches = await cachesCollection.find();

  for (const { latitude, longitude, title, description } of caches) {
    document.body.innerHTML += `<div>
<input value="${title}">
<input type="number" value="${latitude}"/>
<input type="number" value="${longitude}"/>
<input value="${description}"/>
</div>`;
  }
}

function save() {}
