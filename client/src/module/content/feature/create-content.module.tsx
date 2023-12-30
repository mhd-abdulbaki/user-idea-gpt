//@Third Party
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";

//@Dev
//#Data Access => Store + Service
import { toggoleIsOpenRed, selecteIsOpen, useCreateContentMutation } from "..";
//#Shared UI
import { ButtonComponent, ModalComponent } from "../../../lib/shared";
import { FormControlComponent } from "../../../lib/shared/ui/form/form-control.component";

//#Store Hooks
import { useAppDispatch, useAppSelector } from "../../../lib/store/hooks";

//@Utils
import { ContentValidation, contentFormConstant } from "../utils";

export const CreateContentModule = () => {
  //@Init
  const dispatch = useAppDispatch();

  //@Selector
  const selectedIsOpen = useAppSelector(selecteIsOpen);

  //@Async Calls
  const [createContentMutate, { isLoading }] = useCreateContentMutation();

  //@Formik
  //#Init Values
  const initialValues = {
    websiteName: "",
    websiteDescription: "",
    target: "",
  };
  //On Submit
  const onSubmit = async (
    data: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await createContentMutate({
        websiteName: data.websiteName,
        websiteDescription: data.websiteDescription,
        target: data.target,
      }).unwrap();
      resetForm();
      toast.success("Your Idea has been created");
      dispatch(toggoleIsOpenRed());
    } catch (error) {
      console.log(error);
      toast.error("Fail");
    }
  };

  return (
    <ModalComponent
      isOpen={selectedIsOpen}
      openHandler={() => dispatch(toggoleIsOpenRed())}
      title="Create New User Idea"
    >
      <Formik
        validationSchema={ContentValidation}
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            {contentFormConstant.map((field) => (
              <FormControlComponent
                key={field.name}
                control={field.control}
                name={field.name}
                type={field.type as "text"}
                placeholder={field.placeholder}
                label={field.label}
              />
            ))}

            <ButtonComponent
              disabled={isLoading}
              type="submit"
              className="rounded-lg !text-white primary-gradient w-full"
            >
              {isLoading ? "Submiting..." : "Submit"}
            </ButtonComponent>
          </Form>
        )}
      </Formik>
    </ModalComponent>
  );
};
