"use strict";
/**
 * Данные карточки товара.
 * Публикуются в window.TeaboomData, потому что проект
 * работает через file:// — ES-модули в этом случае
 * не поддерживаются браузером.
 */

window.TeaboomData = Object.freeze({
  VARIANTS: {
    100: { sku: "01306", price: 326.40, oldPrice: 349.20, stock: "in-stock" },
    500: { sku: "01307", price: 1432, oldPrice: 1646, stock: "in-stock" },
    1000: { sku: "01308", price: 2064, oldPrice: 2592, stock: "low-stock" },
    5000: { sku: "01309", price: 6320, oldPrice: 8710, stock: "in-stock" },
  },
  CURRENCY: "₽",
  STOCK_LABELS: {
    "in-stock": "Много",
    "low-stock": "Мало",
    "out-of-stock": "Нет в наличии",
  },
});
