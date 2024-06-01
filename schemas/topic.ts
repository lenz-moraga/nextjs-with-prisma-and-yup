import * as Yup from "yup";

export const topicSchema = Yup.object().shape({
  topicName: Yup.string().required("Topic name is required"),
  description: Yup.string(),
  duration: Yup.number()
    .integer()
    .positive("Duration must be a positive integer"),
  courseId: Yup.number()
    .integer()
    .positive("Course ID must be a positive integer"),
});
