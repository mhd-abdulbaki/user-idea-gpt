import { InputComponent } from "./input.component";
import { TextAreaComponent } from "./textarea.component";

interface IPorps {
  control: string;
  name: string;
  type: "text" | "password";
  label: string;
  placeholder: string;
}

export const FormControlComponent = ({
  control,
  name,
  label,
  placeholder,
  type,
  ...rest
}: IPorps) => {
  switch (control) {
    case "input":
      return (
        <InputComponent
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          {...rest}
        />
      );

    case "textarea":
      return (
        <TextAreaComponent
          name={name}
          label={label}
          placeholder={placeholder}
          {...rest}
        />
      );

    default:
      return (
        <InputComponent
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          {...rest}
        />
      );
  }
};
