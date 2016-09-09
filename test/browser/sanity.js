module.exports = {
  '@disabled': true,

  'Sanity Test' : function (client) {
    client
      .url('http://localhost:3000/')
      .pause(1000);

    // expect element to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    client.end();
  }
}
