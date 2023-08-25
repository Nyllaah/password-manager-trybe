export type PasswordCardProps = {
  handleRemove: (id: number) => void,
  id: number,
  service: string,
  login: string,
  password: string,
  url: string
};

export type FormDataProps = {
  service: string,
  login: string,
  password: string,
  url: string
};

export type FormProps = {
  setShowForm: (show: boolean) => void,
  addPassword: (formData: FormDataProps) => void
};

export type PasswordListProps = {
  handleRemove: (id: number) => void,
  passwordList: FormDataProps[],
  handleCheckbox:() => void,
  showPasswords: boolean
};
