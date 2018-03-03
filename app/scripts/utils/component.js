import $ from 'jquery';

export default class Component {
  constructor(selector) {
    this.$el = $(selector);
    this.elems = [];
  }

  get() {
    this.elems = this.$el.toArray();

    return this;
  }

  render() {
    if (this.$el.length) this.get().init();
  }
}
