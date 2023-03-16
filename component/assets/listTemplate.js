/**
 * Функция создание строкового шаблона из списка
 *
 * @param list
 * @return {string}
 */
export const listTemplate = (list) => {
  let template = ``;

  list.forEach(item => {
    template += itemListTemplate(item);
  })

  return template;
};

/**
 * Строковый шаблон пустого списка
 *
 * @type {string}
 */
export const emptyListTemplate = `
<div class="fc-list__message">
  По вашему запросу ничего не найдено
</div>
`;

/**
 * Строковый шаблон прогресса
 *
 * @type {string}
 */
export const loadingListTemplate = `
<div class="fc-list__message">
  Получение данных
</div>
`;

/**
 * Функция рендеринга отдельных элементов списка
 *
 * @param item
 * @return string
 */
const itemListTemplate = (item) => {
  return `
    <a href='#' class="fc-list__item" data-value="${item.data.inn}">
      ${item.value}
      <small>ИНН: ${item.data.inn}, ${item.data.address.data.city_with_type}</small>
    </a>
  `;
};