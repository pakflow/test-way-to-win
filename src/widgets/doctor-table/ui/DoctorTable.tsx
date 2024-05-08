import { FC } from "react";
import { Doctor } from "@/entities/participant/model/Participant";
import { useNavigate } from "react-router-dom";

export interface DoctorsProps {
  doctors: Doctor[];
}

const DoctorTable: FC<DoctorsProps> = ({ doctors }) => {
  const navigate = useNavigate();
  const handleRowClick = (doctor: Doctor) => {
    navigate(`/${doctor.id}`);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mt-8 mb-4">Врачи</h2>
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
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Заведующий
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {doctors.map((doctor) => (
            <tr key={doctor.id} onClick={() => handleRowClick(doctor)} className="cursor-pointer">
              <td className="px-6 py-4 whitespace-nowrap">{doctor.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.fullName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {doctor.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {doctor.head ? "Да" : "Нет"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
