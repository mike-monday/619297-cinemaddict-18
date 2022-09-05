/**
 * @param {number} count
 */
export const formatCommentsCount = (count) => {
  if (count === 1) {
    return `${count} comment`;
  }
  return `${count} comments`;
};

/**
 * @param {string} text
 */
export const truncateText = (text, length = 140, ellipsis = '…') => {
  if (text.length > length) {
    return text.slice(0, length - 1) + ellipsis;
  }
  return text;
};

export const setGenre = (arr) => arr[0];

export const setContentRating = (text) => `${text}+`;
