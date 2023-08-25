import { PasswordListProps } from '../types';
import PasswordCard from './PasswordCard';

function PasswordList({ passwordList, handleRemove, handleCheckbox,
  showPasswords }: PasswordListProps) {
  return (
    <>
      <div>
        <input type="checkbox" id="hide-passwords" onChange={ handleCheckbox } />
        <label htmlFor="hide-passwords">Esconder senhas</label>
      </div>
      {passwordList.map((card, index) => {
        const { service, login, password, url } = card;
        return (
          <PasswordCard
            key={ index }
            id={ index }
            service={ service }
            login={ login }
            password={ !showPasswords ? password : '******' }
            url={ url }
            handleRemove={ handleRemove }
          />
        );
      })}
    </>
  );
}

export default PasswordList;
