import { PasswordCardTypes } from '../types';

function PasswordCard({ newPassword: { service, login, password, url } }:
PasswordCardTypes) {
  return (
    <div>
      <a href={ url }>{service}</a>
      <p>{`Login: ${login}`}</p>
      <p>{`Senha: ${password}`}</p>
    </div>
  );
}

export default PasswordCard;
