type TitleProps = {
  props: string
};

function Title({ props }: TitleProps) {
  return <h1>{props}</h1>;
}

export default Title;
