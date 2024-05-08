import { Nurse } from "@/entities/participant/model/Participant";
import { ROUTES } from "@/shared/routes/routes";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export interface NursesProps {
  nurses: Nurse[];
}

const NurseTable: FC<NursesProps> = ({ nurses }) => {
  const navigate = useNavigate();
  const handleRowClick = (nurse: Nurse) => {
    navigate(`${ROUTES.NURSES}/${nurse.id}`);
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mt-8 mb-4">Медсестры</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ФИО
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Отделение
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {nurses.map((nurse) => (
            <tr key={nurse.id} onClick={() => handleRowClick(nurse)} className="cursor-pointer">
              <td className="px-6 py-4 whitespace-nowrap">{nurse.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{nurse.fullName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {nurse.department}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NurseTable;
