type ButtonProps = {
  btnName: string
};

function Button({ btnName }: ButtonProps) {
  return <button>{btnName}</button>;
}

export default Button;
