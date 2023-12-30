import * as Yup from "yup";

export const ContentValidation = Yup.object({
  websiteName: Yup.string().min(2).max(32).required("Website name is required"),
  websiteDescription: Yup.string()
    .min(2)
    .max(500)
    .required("Website description is required"),
  target: Yup.string().min(2).max(128).required("Target is required"),
});
