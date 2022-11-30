export class Section {
  constructor({ items, renderer }, selectorContainerElements) {
    this._items = items;
    this._renderer = renderer;
    this._containerElements = document.querySelector(selectorContainerElements);
  }
  renderAllitems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(itemHtmlElement) {
    this._containerElements.prepend(itemHtmlElement);
  }
}
