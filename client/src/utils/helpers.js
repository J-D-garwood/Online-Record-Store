// Utility function to pluralize a name based on a count
export function pluralize(name, count) {
  if (count === 1) {
    return name; // Return the singular form of the name when count is 1
  }
  return name + "s"; // Return the plural form of the name for all other counts
}

// Utility function to interact with IndexedDB (a browser-based database)
export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("shop-shop", 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;

      // Create object stores for "vinyls" and "cart" with a key path of "_id"
      db.createObjectStore("vinyls", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };

    request.onerror = function (e) {
      console.log("There was an error");
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(storeName, "readwrite");
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.log("error", e);
      };

      switch (method) {
        case "put":
          store.put(object); // Put the object into the store
          resolve(object);
          break;
        case "get":
          const all = store.getAll(); // Retrieve all objects from the store
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id); // Delete an object from the store by its ID
          break;
        default:
          console.log("No valid method");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
