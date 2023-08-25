/* eslint-disable max-len */
import { PasswordCardProps } from '../types';

function PasswordCard({ handleRemove, service, login, password, url, id }:
PasswordCardProps) {
  return (
    <div className="password-card">
      <div className="info-container">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 14C10.9833 14 11.375 13.6082 11.375 13.125C11.375 12.6418 10.9833 12.25 10.5 12.25C10.0168 12.25 9.62503 12.6418 9.62503 13.125C9.62503 13.6082 10.0168 14 10.5 14Z" fill="#9CBCE0" />
          <path d="M14.875 6.99994H14V5.34619C14 4.41793 13.6312 3.5277 12.9748 2.87132C12.3185 2.21494 11.4282 1.84619 10.5 1.84619C9.57171 1.84619 8.68147 2.21494 8.0251 2.87132C7.36872 3.5277 6.99997 4.41793 6.99997 5.34619V6.99994H6.12497C5.42878 6.99994 4.7611 7.2765 4.26881 7.76879C3.77653 8.26107 3.49997 8.92875 3.49997 9.62494V16.6249C3.49997 17.3211 3.77653 17.9888 4.26881 18.4811C4.7611 18.9734 5.42878 19.2499 6.12497 19.2499H14.875C15.5712 19.2499 16.2388 18.9734 16.7311 18.4811C17.2234 17.9888 17.5 17.3211 17.5 16.6249V9.62494C17.5 8.92875 17.2234 8.26107 16.7311 7.76879C16.2388 7.2765 15.5712 6.99994 14.875 6.99994ZM8.74997 5.34619C8.7382 4.86958 8.91574 4.40771 9.24372 4.06169C9.5717 3.71567 10.0234 3.51368 10.5 3.49994C10.9765 3.51368 11.4282 3.71567 11.7562 4.06169C12.0842 4.40771 12.2617 4.86958 12.25 5.34619V6.99994H8.74997V5.34619ZM10.5 15.7499C9.98079 15.7499 9.47328 15.596 9.0416 15.3076C8.60992 15.0191 8.27347 14.6091 8.07479 14.1295C7.87611 13.6498 7.82412 13.122 7.92541 12.6128C8.02669 12.1036 8.2767 11.6359 8.64381 11.2688C9.01093 10.9017 9.47866 10.6517 9.98786 10.5504C10.4971 10.4491 11.0249 10.5011 11.5045 10.6998C11.9842 10.8984 12.3941 11.2349 12.6826 11.6666C12.971 12.0982 13.125 12.6058 13.125 13.1249C13.125 13.8211 12.8484 14.4888 12.3561 14.9811C11.8638 15.4734 11.1962 15.7499 10.5 15.7499Z" fill="#9CBCE0" />
        </svg>
        <div>
          <a href={ url }>{service}</a>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.20995 5.73893L5.73894 8.20994C5.68104 8.26737 5.63508 8.33569 5.60372 8.41097C5.57235 8.48625 5.55621 8.56699 5.55621 8.64855C5.55621 8.7301 5.57235 8.81084 5.60372 8.88612C5.63508 8.9614 5.68104 9.02972 5.73894 9.08715C5.79636 9.14505 5.86469 9.19101 5.93997 9.22237C6.01525 9.25373 6.09599 9.26988 6.17754 9.26988C6.25909 9.26988 6.33984 9.25373 6.41511 9.22237C6.49039 9.19101 6.55872 9.14505 6.61615 9.08715L9.08716 6.61614C9.20348 6.49981 9.26884 6.34204 9.26884 6.17753C9.26884 6.01302 9.20348 5.85525 9.08716 5.73893C8.97083 5.6226 8.81306 5.55725 8.64855 5.55725C8.48405 5.55725 8.32627 5.6226 8.20995 5.73893Z" fill="#6D6F77" />
            <path d="M7.586 10.7489L6.79527 11.5335C6.35137 11.9909 5.75463 12.2689 5.11887 12.3144C4.48311 12.36 3.85281 12.17 3.34821 11.7806C3.08151 11.5608 2.86387 11.2875 2.70935 10.9784C2.55484 10.6693 2.46688 10.3312 2.45116 9.98596C2.43544 9.64074 2.49231 9.29605 2.6181 8.97417C2.74388 8.65229 2.93579 8.36037 3.18142 8.11728L4.05862 7.23389C4.11653 7.17646 4.16248 7.10814 4.19385 7.03286C4.22521 6.95758 4.24136 6.87684 4.24136 6.79529C4.24136 6.71373 4.22521 6.63299 4.19385 6.55771C4.16248 6.48243 4.11653 6.41411 4.05862 6.35668C4.0012 6.29878 3.93287 6.25282 3.85759 6.22146C3.78231 6.1901 3.70157 6.17395 3.62002 6.17395C3.53847 6.17395 3.45773 6.1901 3.38245 6.22146C3.30717 6.25282 3.23884 6.29878 3.18142 6.35668L2.39687 7.1474C1.73597 7.7874 1.32975 8.64547 1.25363 9.56231C1.17751 10.4791 1.43667 11.3925 1.98297 12.1327C2.30722 12.5533 2.71726 12.9002 3.18586 13.1501C3.65445 13.4001 4.17088 13.5476 4.70083 13.5826C5.23078 13.6177 5.76212 13.5396 6.25957 13.3535C6.75701 13.1674 7.20917 12.8776 7.586 12.5033L8.46321 11.6261C8.57953 11.5098 8.64488 11.352 8.64488 11.1875C8.64488 11.023 8.57953 10.8652 8.46321 10.7489C8.34688 10.6326 8.18911 10.5672 8.0246 10.5672C7.86009 10.5672 7.70232 10.6326 7.586 10.7489Z" fill="#6D6F77" />
            <path d="M12.145 1.98914C11.3997 1.43716 10.4789 1.17537 9.55469 1.25267C8.63045 1.32997 7.76596 1.74109 7.12269 2.40921L6.45551 3.08874C6.37926 3.14418 6.31549 3.21501 6.26835 3.29665C6.2212 3.37829 6.19172 3.46892 6.18182 3.56268C6.17192 3.65643 6.18182 3.75122 6.21088 3.84091C6.23993 3.9306 6.2875 4.01319 6.3505 4.08332C6.40793 4.14123 6.47625 4.18718 6.55153 4.21855C6.62681 4.24991 6.70755 4.26606 6.7891 4.26606C6.87065 4.26606 6.9514 4.24991 7.02668 4.21855C7.10195 4.18718 7.17028 4.14123 7.22771 4.08332L8.03079 3.27407C8.47223 2.81465 9.06827 2.53513 9.70376 2.4895C10.3393 2.44386 10.9691 2.63535 11.4717 3.02697C11.7404 3.24676 11.9597 3.52071 12.1155 3.83095C12.2712 4.14119 12.3598 4.48077 12.3756 4.82755C12.3913 5.17433 12.3338 5.52054 12.2068 5.84361C12.0798 6.16668 11.8861 6.45937 11.6385 6.7026L10.7613 7.58599C10.7034 7.64341 10.6574 7.71174 10.626 7.78702C10.5947 7.8623 10.5785 7.94304 10.5785 8.02459C10.5785 8.10614 10.5947 8.18689 10.626 8.26216C10.6574 8.33744 10.7034 8.40577 10.7613 8.4632C10.8187 8.5211 10.887 8.56705 10.9623 8.59842C11.0376 8.62978 11.1183 8.64593 11.1999 8.64593C11.2814 8.64593 11.3622 8.62978 11.4374 8.59842C11.5127 8.56705 11.581 8.5211 11.6385 8.4632L12.5157 7.58599C12.8889 7.20922 13.1778 6.75746 13.3633 6.26062C13.5487 5.76378 13.6265 5.23321 13.5915 4.70405C13.5564 4.17488 13.4094 3.6592 13.16 3.19116C12.9106 2.72312 12.5647 2.3134 12.145 1.98914Z" fill="#6D6F77" />
          </svg>
        </div>

      </div>
      <div className="info-container">
        <span className="label">Login</span>
        <span className="info">{login}</span>
      </div>
      <div className="info-container">
        <span className="label">Senha</span>
        <span className="info">{password}</span>
      </div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button data-testid="remove-btn" onClick={ () => handleRemove(id) } className="remove-btn" />
    </div>
  );
}

export default PasswordCard;
