import { PasswordCardProps } from '../types';

function PasswordCard({ handleRemove, service, login, password, url, id }:
PasswordCardProps) {
  return (
    <>
      <a href={ url }>{service}</a>
      <p>{login}</p>
      <p>{password}</p>
      <button data-testid="remove-btn" onClick={ () => handleRemove(id) }>Remover</button>
    </>
  );
}

export default PasswordCard;
