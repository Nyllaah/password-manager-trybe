type PasswordCardProps = {
  service: string,
  login: string,
  password: string,
  url: string
};

function PasswordCard({ service, login, password, url }: PasswordCardProps) {
  return (
    <div>
      <a href={ url }>{service}</a>
      <p>{`Login: ${login}`}</p>
      <p>{`Senha: ${password}`}</p>
    </div>
  );
}

export default PasswordCard;
