import * as Yup from 'yup';

export const coachTopicScheduleSchema = Yup.object().shape({
  coachId: Yup.number().integer().required('Coach ID is required').positive('Coach ID must be a positive integer'),
  topicId: Yup.number().integer().required('Topic ID is required').positive('Topic ID must be a positive integer'),
  scheduleId: Yup.number().integer().required('Schedule ID is required').positive('Schedule ID must be a positive integer'),
});
