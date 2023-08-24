import { PasswordCardTypes } from '../types';
import PasswordCard from './PasswordCard';

type PasswordListProps = {
  passwordList: PasswordCardTypes[]
};

function PasswordList({ passwordList }: PasswordListProps) {
  return (
    <>
      {passwordList.map((card) => {
        const { service, login, password, url } = card;
        return (
          <PasswordCard
            key={ login }
            service={ service }
            login={ login }
            password={ password }
            url={ url }
          />
        );
      })}
    </>
  );
}

export default PasswordList;
