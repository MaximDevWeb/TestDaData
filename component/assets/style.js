/**
 * Стили для компонента
 *
 * @type {string}
 */
export const style = `
<style>
.fc-panel {
  position:relative;
  font-family: Arial, sans-serif;
  max-width: 350px;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid rgb(203 213 225);
  border-radius: 0.5rem;
}

.fc_invisible {
  opacity: 0;
  visibility: hidden;
}

.fc-error {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: white;
  font-size: 0.875rem;
  background-color: rgb(190 18 60);
  z-index: 50;
  transition: all 0.3s;
}

.fc-panel form{
  display:flex;
  flex-direction: column;
  gap: 1rem
}

.fc-row {
  position:relative;
  display:flex;
  flex-direction: column;
}

.fc-label {
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.fc-label_bold {
  font-weight: bold;
}

.fc-input {
  font-family: Arial, sans-serif;
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  border: 1px solid rgb(203 213 225);
  border-radius: 0.25rem;
  outline: none;
}

.fc-list {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  display:flex;
  flex-direction: column;
  background-color: rgb(241 245 249);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  overflow: hidden;
  z-index: 50;
}

.fc-list__message {
  padding: 0.5rem;
}

.fc-list__item {
  text-decoration: none;
  color: rgb(71 85 105);
  padding: 0.5rem 0.5rem;
}

.fc-list__item small {
  display:block;
}

.fc-list__item:first-child {
  padding-top: 0.5rem;
}

.fc-list__item:last-child {
  padding-bottom: 0.5rem;
}

.fc-list__item:hover {
  background-color: rgb(226 232 240);
  color: rgb(15 23 42);
}
</style>
`