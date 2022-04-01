import { useEffect } from 'react';

import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';
import { getAllFeedback } from '../../contexts/feedback/FeedbackAction';

import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import Spinner from '../../shared/Spinner';

function FeedbackList() {
	const { dispatch, isLoading, feedbackList } = useFeedbackContext();

	useEffect(() => {
		const fetchAllFeedback = async () => {
			const payload = await getAllFeedback();
			dispatch({ type: 'GET_ALL_FEEDBACK', payload });
		};

		fetchAllFeedback();
	}, [dispatch]);

	if (!isLoading && (!feedbackList || feedbackList.length === 0)) {
		return <p>No Feedback Yet</p>;
	}

	return isLoading ? (
		<Spinner />
	) : (
		<div className="">
			<AnimatePresence>
				{feedbackList.map((item) => (
					<motion.div
						key={item._id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem key={item._id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default FeedbackList;