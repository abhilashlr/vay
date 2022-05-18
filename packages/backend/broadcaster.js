const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1408383",
  key: "02b8635829d09f169dd4",
  secret: "74d455f4950107e2d57c",
  cluster: "ap2",
  useTLS: true
});

module.exports = {
  batchUpdate: (locations) => {
    pusher.trigger("vay-locations", "BATCH_UPDATE", {
      locations,
    });
  },

  update: (location) => {
    pusher.trigger("vay-locations", "UPDATE", location);
  },

  add: (locations) => {
    pusher.trigger("vay-locations", "ADD", {
      locations,
    });
  },

  remove: (l) => {
    pusher.trigger("vay-locations", "REMOVE", {
      location: l,
    });
  }
}