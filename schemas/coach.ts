import * as Yup from "yup";

export const coachSchema = Yup.object().shape({
  coachName: Yup.string().required("Coach name is required"),
  email: Yup.string().email("Invalid email format"),
  phoneNumber: Yup.string(),
  courseId: Yup.number()
    .integer()
    .positive("Course ID must be a positive integer"),
});
