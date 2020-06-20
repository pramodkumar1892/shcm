import isEmpty from 'lodash.isempty';

export const mapHistory = function(history) {
  return history
    .map(item => item[Object.keys(item)[0]])
    .map(item => {
      return {
        ...item,
        tapCollection: Array.isArray(item.tapCollection)
          ? item.tapCollection
          : Object.keys(item.tapCollection).map(
              mItem => item.tapCollection[mItem],
            ),
      };
    });
};

export const mapTapPayload = function(todayHistory, id) {
  const payload = {};
  if (isEmpty(todayHistory)) {
    payload.user_id = id;
  } else {
    const lastEntry =
      todayHistory.tapCollection[todayHistory.tapCollection.length - 1];
    if (isEmpty(lastEntry.tap_out)) {
      payload.user_id = id;
      payload.tap_parent_id = todayHistory.id;
      payload.tap_collection_id = lastEntry.id;
    } else {
      payload.user_id = id;
      payload.tap_parent_id = todayHistory.id;
    }
  }
  return payload;
};
