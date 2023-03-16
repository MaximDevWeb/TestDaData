import {emptyListTemplate, listTemplate, loadingListTemplate} from "../assets/listTemplate.js";

/**
 * Класс для работы с Dom элементами
 */
export class Dom {
  /**
   * Функция для превода строкового шаблона в элемент
   *
   * @param template
   * @param className
   * @param wrapper
   * @return {HTMLDivElement}
   */
  static templateToElement(
    template,
    className = 'fc-panel',
    wrapper = 'div'
  ) {
    const result = document.createElement(wrapper);

    if (className) result.classList.add(className);
    result.innerHTML = template;

    return result;
  }

  /**
   * Функция рендеринга списка эдементов
   *
   * @param listElem
   * @param list
   * @param isLoad
   */
  static listToTemplate(listElem, list, isLoad) {
    let template = '';
    listElem.innerHTML = '';

    if (isLoad) {
      template = Dom.templateToElement(loadingListTemplate, 'fc-list');
    } else if (!isLoad && list.length) {
      template = Dom.templateToElement(listTemplate(list), 'fc-list');
    } else if (!isLoad && !list.length) {
      template = Dom.templateToElement(emptyListTemplate, 'fc-list');
    }

    listElem.append(template);
  }

  /**
   * Функция заполнения формы после выбора элемента
   *
   * @param form
   * @param item
   */
  static fillForm(form, item) {
    const shortNameElem = form.querySelector('#short-name');
    const fullNameElem = form.querySelector('#full-name');
    const innElem = form.querySelector('#inn');
    const addressElem = form.querySelector('#address');


    shortNameElem.value = item.data.name.short_with_opf;
    fullNameElem.value = item.data.name.full_with_opf;
    innElem.value = item.data.inn + (item.data.kpp ? ` / ${item.data.kpp}` : '');
    addressElem.value = item.data.address.unrestricted_value;
  }

  /**
   * Функция показа ошибки
   *
   * @param errorElem
   */
  static showError(errorElem) {
    errorElem.classList.remove('fc_invisible');

    setTimeout(() => {
      errorElem.classList.add('fc_invisible');
    }, 4000);
  }
}