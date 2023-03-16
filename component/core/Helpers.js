/**
 * Функция для задержки выполнения
 *
 * @param func
 * @param timeout
 * @return {(function(...[*]): void)|*}
 */
export function debounce(func, timeout = 500){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}