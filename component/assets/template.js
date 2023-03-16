import {style} from "./style.js";

/**
 * Основной шаблон формы
 *
 * @type {string}
 */
export const template = `
${style}

<div class="fc-error fc_invisible">
  Что-то пошло не так, повторите попытку позже!
</div>

<form>
  <div class="fc-row">
    <label for="name" class="fc-label fc-label_bold">Компания или ИП</label>
    <input id="name" class="fc-input" placeholder="Начните ввод">
    
    <div class="fc-list_wrap"></div>
  </div>
  
  <div class="fc-row">
    <label class="fc-label">Организация (LEGAL)</label>
  </div>
  
  <div class="fc-row">
    <label for="short-name" class="fc-label">Краткое наименование</label>
    <input id="short-name" class="fc-input">
  </div>
  
  <div class="fc-row">
    <label for="full-name" class="fc-label">Полное наименование</label>
    <input id="full-name" class="fc-input">
  </div>
  
  <div class="fc-row">
    <label for="inn" class="fc-label">ИНН/КПП</label>
    <input id="inn" class="fc-input">
  </div>
  
  <div class="fc-row">
    <label for="address" class="fc-label">Адресс</label>
    <input id="address" class="fc-input">
  </div>
</form>
`;