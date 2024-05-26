const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);

  I.seeElement('.restaurant__name a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(1);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(1);

  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// eslint-disable-next-line no-undef
Scenario('cancel liked one restaurant', async ({ I }) => {
  I.amOnPage('/#/like');
  I.wait(2);

  I.seeElement('.restaurant-item');
  // eslint-disable-next-line no-undef
  const firstRestaurantUnlike = locate('.restaurant__name a').first();
  I.click(firstRestaurantUnlike);
  I.wait(1);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(1);

  I.amOnPage('/#/like');
  I.wait(2);

  await I.waitForElement('.restaurant-item__not__found');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
  I.saveScreenshot('empty-liked-cancel-liked.png');
});
