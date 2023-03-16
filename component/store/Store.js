/**
 * Класс для хранения данных
 */
export class Store {
  list = [];

  /**
   * Добавить элемнеты в список
   *
   * @param items
   */
  setList(items) {
    this.list = [];
    this.list = items;
  }

  /**
   * Найти элемент в списке по ИНН
   *
   * @param value
   * @return {*}
   */
  findItem(value) {
    return this.list.find(item => item.data.inn === value);
  }
}