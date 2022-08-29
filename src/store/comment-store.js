import BaseStore from './store.js';

export default class CommentStore extends BaseStore {
  /**
   * @param {string} movieId
   * @return {Promise<MovieComment[]>}
   */
  get(movieId) {
    return this.query(`/comments/${movieId}`);
  }

  /**
   * @param {string} movieId
   * @param {LocalComment} comment
   * @return {Promise<{movie: Movie, comments: MovieComment[]}>}
   */
  add(movieId, comment) {
    return this.query(`/comments/${movieId}`, {
      method: 'post',
      body: JSON.stringify(comment)
    });
  }

  /**
   * @param {string} commentId
   */
  remove(commentId) {
    return this.query(`/comments/${commentId}`, {
      method: 'delete'
    });
  }
}
