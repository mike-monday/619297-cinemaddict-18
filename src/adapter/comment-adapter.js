export default class CommentAdapter {
  /**
   * @param {MovieComment} comment
   */
  constructor(comment) {
    this.id = comment.id;
    this.author = comment.author;
    this.message = comment.comment;
    this.emotion = comment.emotion;
  }
}
