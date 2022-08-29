/**
 * @typedef Movie
 * @prop {string} id
 * @prop {string[]} comments
 * @prop {MovieInfo} film_info
 * @prop {MovieMeta} user_details
 */

/**
 * @typedef MovieInfo
 * @prop {string} title
 * @prop {string} alternative_title
 * @prop {number} total_rating
 * @prop {string} poster
 * @prop {number} age_rating
 * @prop {string} director
 * @prop {string[]} writers
 * @prop {string[]} actors
 * @prop {string[]} actors
 * @prop {MovieRelease} release
 * @prop {number} runtime
 * @prop {string[]} genre
 * @prop {string} description
 */

/**
 * @typedef MovieRelease
 * @prop {string} date
 * @prop {string} release_country
 */

/**
 * @typedef MovieMeta
 * @prop {boolean} watchlist
 * @prop {boolean} already_watched
 * @prop {string} watching_date
 * @prop {boolean} favorite
 */
