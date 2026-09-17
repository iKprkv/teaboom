"use strict";

(() => {
  const { VARIANTS, CURRENCY, STOCK_LABELS } = window.TeaboomData;

  const formatPrice = (value) => {
    const hasCoins = !Number.isInteger(value);
    const formatted = new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: hasCoins ? 2 : 0,
      maximumFractionDigits: 2,
    }).format(value);
    return `${formatted} ${CURRENCY}`;
  };

  document.addEventListener("DOMContentLoaded", () => {
    const item = document.querySelector(".product");
    if (!item) return;

    const getActiveButton = () =>
      item.querySelector('.packaging__option[aria-checked="true"]');

    const buttons = item.querySelectorAll(".packaging__option");
    const price = item.querySelector("[data-price]");
    const oldPrice = item.querySelector(".product__price-old");
    const sku = item.querySelector(".product__meta dd");
    const stock = item.querySelector(".product__stock-value");

    const selectVariant = (weight) => {
      const option = VARIANTS[weight];
      if (!option) return;

      buttons.forEach((btn) => {
        btn.setAttribute("aria-checked", String(btn.dataset.weight === weight));
      });

      sku.textContent = option.sku;
      price.textContent = formatPrice(option.price);
      oldPrice.textContent = formatPrice(option.oldPrice);

      const hasDiscount = option.oldPrice && option.oldPrice > option.price;

      oldPrice.hidden = !hasDiscount;
      price.classList.toggle("no-offer", !hasDiscount);


      stock.textContent = STOCK_LABELS[option.stock] ?? "";
      stock.dataset.state = option.stock;
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => selectVariant(btn.dataset.weight));
    });

    item
      .querySelector(".product__add-to-cart")
      ?.addEventListener("click", () => {
        console.log("В корзину:", {
          sku: sku.textContent
        });
      });

    const initial = getActiveButton();
    if (initial) selectVariant(initial.dataset.weight);
  });
})();
