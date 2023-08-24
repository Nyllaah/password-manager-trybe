import { PasswordListProps } from '../types';
import PasswordCard from './PasswordCard';

function PasswordList({ passwordList, handleRemove }: PasswordListProps) {
  return (
    <>
      {passwordList.map((card, index) => {
        const { service, login, password, url } = card;
        return (
          <PasswordCard
            key={ index }
            id={ index }
            service={ service }
            login={ login }
            password={ password }
            url={ url }
            handleRemove={ handleRemove }
          />
        );
      })}
    </>
  );
}

export default PasswordList;
