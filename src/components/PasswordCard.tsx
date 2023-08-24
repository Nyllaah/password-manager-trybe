import { PasswordCardProps } from '../types';

function PasswordCard({ handleRemove, service, login, password, url, id }:
PasswordCardProps) {
  return (
    <>
      <a href={ url }>{service}</a>
      <p>{`Login: ${login}`}</p>
      <p>{`Senha: ${password}`}</p>
      <button data-testid="remove-btn" onClick={ () => handleRemove(id) }>Remover</button>
    </>
  );
}

export default PasswordCard;
