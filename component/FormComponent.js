import {template} from "./assets/template.js";
import {Dom} from "./core/Dom.js";
import {http} from "./core/Http.js";
import {debounce} from "./core/Helpers.js";
import {Store} from "./store/Store.js";

/**
 * Основной класс компонента
 */
class FormComponent extends HTMLElement {
  #template;
  #store;
  #load = false;

  constructor() {
    super();
    this.#template = Dom.templateToElement(template);
    this.#store = new Store();
  }

  /**
   * Добавляем элемент на страницу
   * и обрабатываем основные события
   */
  connectedCallback() {
    this.append(this.#template);

    const input = this.querySelector('#name');
    const list = this.querySelector('.fc-list_wrap');
    const error = this.querySelector('.fc-error');

    input.addEventListener('input', debounce(async (e) => {
      const value = e.target.value;

      if (value) {
        this.#load = true;
        this.updateList(list);

        try {
          await this.getData(value);
          this.#load = false
          this.updateList(list);
        } catch (e) {
          Dom.showError(error);
          this.clearList(list);
        }
      } else {
        this.clearList(list);
      }
    }, 600));

    list.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target;

      if (target.tagName === 'A' || target.parentElement.tagName === 'A') {
        const inn = target.dataset.value || target.parentElement.dataset.value;

        Dom.fillForm(this, this.#store.findItem(inn));
        this.clearList(list);
      }
    });
  }

  /**
   * Загружаем данные с сервера
   *
   * @param value
   * @return {Promise<unknown>}
   */
  getData(value) {
    return http.post('api/4_1/rs/suggest/party/df', {query: value})
      .then(response => {
        this.#store.setList(response.suggestions);
      })
  }

  /**
   * Обновляем список элементов
   *
   * @param listElem
   */
  updateList(listElem) {
    const list = this.#store.list;
    const isLoad = this.#load;

    Dom.listToTemplate(listElem, list, isLoad)
  }

  /**
   * Очищаем список элементов
   *
   * @param listElem
   */
  clearList(listElem) {
    this.#store.setList([]);
    listElem.innerHTML = '';
  }
}

customElements.define('form-element', FormComponent);