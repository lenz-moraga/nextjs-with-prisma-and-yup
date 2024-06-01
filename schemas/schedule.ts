import * as Yup from "yup";

export const scheduleSchema = Yup.object().shape({
  coachId: Yup.number()
    .integer()
    .positive("Coach ID must be a positive integer"),
  topicId: Yup.number()
    .integer()
    .positive("Topic ID must be a positive integer"),
  scheduleTime: Yup.date().required("Schedule time is required"),
  scheduleDay: Yup.string(),
  scheduleLocation: Yup.string(),
});
