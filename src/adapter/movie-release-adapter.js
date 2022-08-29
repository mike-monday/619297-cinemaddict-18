export default class MovieReleaseAdapter {
  /**
   * @param {MovieRelease} release
   */
  constructor(release) {
    this.date = release.date;
    this.country = release.release_country;
  }
}
