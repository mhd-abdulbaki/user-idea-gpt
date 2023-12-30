import { ErrorMessage, Field } from "formik";

interface IPorps {
  name: string;
  label: string;
  placeholder: string;
}

export const TextAreaComponent = ({ name, label, placeholder }: IPorps) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      <Field
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></Field>
      <ErrorMessage
        name={name}
        render={(msg: string) => (
          <p className="text-[12px] text-red-600 mb-2">{msg}</p>
        )}
      />
    </div>
  );
};
