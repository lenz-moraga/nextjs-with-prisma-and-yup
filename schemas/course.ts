import * as Yup from "yup";

export const courseSchema = Yup.object().shape({
  courseName: Yup.string().required("Course name is required"),
  description: Yup.string(),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
});
