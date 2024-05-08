import { FC } from "react";
import type { Doctor } from "@/entities/participant/model/Participant";
import { useParams } from "react-router-dom";
import participants from "@/entities/participant/model/participants.json";

const Doctor: FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const doctor = participants.doctors.find(
    (doctor) => doctor.id.toString() === doctorId
  );

  if (!doctor) {
    return <div>Не найден</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mt-8 mb-4">Информация о враче</h2>
      <div>
        <p>ID: {doctor.id}</p>
        <p>Полное имя: {doctor.fullName}</p>
        <p>Отделение: {doctor.department}</p>
        <p>Заведующий: {doctor.head ? "Да" : "Нет"}</p>
      </div>
    </div>
  );
};

export default Doctor;
