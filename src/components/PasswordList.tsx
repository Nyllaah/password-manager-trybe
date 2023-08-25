import { PasswordListProps } from '../types';
import PasswordCard from './PasswordCard';

function PasswordList({ passwordList, handleRemove, handleCheckbox,
  showPasswords }: PasswordListProps) {
  return (
    <>
      <div className="checkbox-container">
        <label htmlFor="check">Esconder Senhas</label>
        <input type="checkbox" id="check" onChange={ handleCheckbox } />
        <label htmlFor="check" className="button">
          <span className="slider" />
        </label>
      </div>
      <div className="list-container">
        {passwordList.map((card, index) => {
          const { service, login, password, url } = card;
          return (
            <PasswordCard
              key={ index }
              id={ index }
              service={ service }
              login={ login }
              password={ showPasswords ? password : '******' }
              url={ url }
              handleRemove={ handleRemove }
            />
          );
        })}
      </div>
    </>
  );
}

export default PasswordList;
