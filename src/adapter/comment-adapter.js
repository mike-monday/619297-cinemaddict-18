import Adapter from './adapter.js';

export default class CommentAdapter extends Adapter {
  /**
   * @param {MovieComment} init
   */
  constructor(init) {
    super();

    this.id = init.id;
    this.author = init.author;
    this.message = init.comment;
    this.emotion = init.emotion;
  }
}
