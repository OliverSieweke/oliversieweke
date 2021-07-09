const cachesDiv = document.getElementById("caches");
const addButton = document.getElementById("add");
const updateButton = document.getElementById("update");

function cacheHtml(position) {
  console.log("position:\t", position);

  return `
<div class="cache">
<input name="title" placeholder="Title">
<input name="latitude" placeholder="Latitude"  value="${position.coords.latitude}" type="number"/>
<input name="longitude" placeholder="Longitude" value="${position.coords.longitude}" type="number" />
<input name="description" placeholder="Description"/>
<input name="special" type="checkbox"/>
      <button class="remove">-</button>

</div>`;
}

addButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    cachesDiv.innerHTML += cacheHtml(position);

    const removeButtons = document.getElementsByClassName("remove");
    for (const removeButton of Array.from(removeButtons)) {
      console.log("removeButton:\t", removeButton);

      removeButton.addEventListener("click", () => {
        console.log("asdf");
        removeButton.parentNode.remove();
      });
    }
  });
});

updateButton.addEventListener("click", () => {
  const caches = Array.from(document.getElementsByClassName("cache")).map(
    (cacheElement) => {
      const inputs = cacheElement.querySelectorAll("input");
      const cache = {};

      return Array.from(inputs).reduce((cache, input) => {
        console.log("input.value:\t", input.checked);

        if (input.name === "special") {
          return {
            ...cache,
            [input.name]: input.checked,
          };
        } else {
          return {
            ...cache,
            [input.name]: input.value,
          };
        }
      }, {});
    }
  );

  save(caches);
});

getCaches();

async function getCaches() {
  const app = new Realm.App({ id: "narayanin-mvhku" });
  const credentials = Realm.Credentials.anonymous();
  const user = await app.logIn(credentials);
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const cachesCollection = mongodb.db("caches").collection("caches");
  const caches = await cachesCollection.find();

  console.log("caches:\t", caches);

  for (const { latitude, longitude, title, description, special } of caches) {
    console.log("special:\t", special);

    cachesDiv.innerHTML += `<div class="cache">
      <input name="title" value="${title}">
      <input name="latitude" type="number" value="${latitude}"/>
      <input name="longitude" type="number" value="${longitude}"/>
      <input name="description" value="${description}"/>
      <input name="special" type="checkbox" ${special ? "checked" : ""}/>

      <button class="remove">-</button>
      </div>
        `;
  }

  const removeButtons = document.getElementsByClassName("remove");
  for (const removeButton of Array.from(removeButtons)) {
    console.log("removeButton:\t", removeButton);

    removeButton.addEventListener("click", () => {
      console.log("asdf");
      removeButton.parentNode.remove();
    });
  }
}

async function save(caches) {
  const app = new Realm.App({ id: "narayanin-mvhku" });
  const credentials = Realm.Credentials.anonymous();
  const user = await app.logIn(credentials);
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  const cachesCollection = mongodb.db("caches").collection("caches");
  await cachesCollection.deleteMany();
  await cachesCollection.insertMany(caches);
}
