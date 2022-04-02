import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';

function FeedbackStats() {
	const { feedbackList } = useFeedbackContext();
	const avrg = Math.round(
		feedbackList.reduce((acc, { rating }) => acc + rating, 0) /
			feedbackList.length
	);
	return (
		<div className=" text-white flex justify-between items-center mt-12 mb-6 text-lg px-1">
			{feedbackList.length > 0 && (
				<h4>
					{feedbackList.length} {feedbackList.length > 1 ? 'Reviews' : 'Review'}
				</h4>
			)}
			{!isNaN(avrg) && feedbackList.length > 1 && (
				<h4>Average Rating: {avrg} </h4>
			)}
		</div>
	);
}

export default FeedbackStats;
