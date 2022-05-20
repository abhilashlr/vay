const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1411079',
  key: 'b21791b6356e9b0999ab',
  secret: '444c65a166b19a05ab0d',
  cluster: 'mt1',
  useTLS: true,
});

module.exports = {
  batchUpdate: (locations) => {
    pusher.trigger('vay-locations', 'BATCH_UPDATE', {
      locations,
    });
  },

  update: (location) => {
    pusher.trigger('vay-locations', 'UPDATE', location);
  },

  add: (locations) => {
    pusher.trigger('vay-locations', 'ADD', {
      locations,
    });
  },

  remove: (vin) => {
    pusher.trigger('vay-locations', 'REMOVE', {
      vin,
    });
  },
};
