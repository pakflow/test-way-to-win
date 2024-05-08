import { ROUTES } from "@/shared/routes/routes";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-24 px-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to={ROUTES.DOCTORS} className="hover:text-gray-300">
                Врачи
              </Link>
            </li>
            <li>
              <Link to={ROUTES.NURSES} className="hover:text-gray-300">
                Медсестры
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
