import isEmpty from 'lodash.isempty'
import moment from 'moment'

export const mapHistory = function (history) {
	return history.map(item => item[Object.keys(item)[0]])
}

export const mapTapPayload = function (history, id) {
	const payload = {}
	const today = moment().format("YYYY-MM-DD")
	const todayHistory = history.find(item => item.date === today)
	if (isEmpty(todayHistory)) {
		payload["user_id"] = id
	} else {
		const lastEntry = todayHistory.tapCollection[todayHistory.tapCollection.length - 1]
		if (isEmpty(lastEntry.tap_out)) {
			payload["user_id"] = id
			payload["tap_parent_id"] = todayHistory.id
			payload["tap_collection_id"] = lastEntry.id
		} else {
			payload["user_id"] = id
			payload["tap_parent_id"] = todayHistory.id
		}
	}
	return payload
}