import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h1 class="restaurant__name">${restaurant.restaurant.name}</h1>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
  <p><b>Rating : ${restaurant.restaurant.rating}</b></p>
  <p><b>Adress : ${restaurant.restaurant.address}, ${restaurant.restaurant.city}</b><p>
  <p>${restaurant.restaurant.description}</p>
  <h3>Food Menu</h3>
  <p>${restaurant.restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
  <h3>Drinks Menu</h3>
  <p>${restaurant.restaurant.menus.drinks.map((drinks) => drinks.name).join(', ')}</p>
  <h3>Customer Review</h3>
  ${restaurant.restaurant.customerReviews.map(
    (review) => `
    <p><b>${review.name}</b> - ${review.date}</p>
    <p>${review.review}</p> 
  `,
  ).join('<br>')}
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload" id="restaurant-item__header__poster" alt="${restaurant.name}"
      data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">     
      <div class="restaurant-item__header__city">
        <p>${restaurant.city}</p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h2>Rating : ${restaurant.rating}</h2>
      <h3 class="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
