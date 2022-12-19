export class Section {
  constructor( renderer , selectorContainerElements) {
    this._renderer = renderer;
    this._containerElements = document.querySelector(selectorContainerElements);
  }
  renderAllitems(items) {
    items.reverse().forEach(item => {
      this._renderer(item);
    });
  }
  addItem(itemHtmlElement) {
    this._containerElements.prepend(itemHtmlElement);
  }
}
