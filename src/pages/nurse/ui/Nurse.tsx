import { useParams } from "react-router-dom";
import participants from "@/entities/participant/model/participants.json";

const Nurse = () => {
  const { nurseId } = useParams<{ nurseId: string }>();
  const nurse = participants.nurses.find(
    (nurse) => nurse.id.toString() === nurseId
  );

  if (!nurse) {
    return <div>Не найден</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mt-8 mb-4">Информация о враче</h2>
      <div>
        <p>ID: {nurse.id}</p>
        <p>Полное имя: {nurse.fullName}</p>
        <p>Отделение: {nurse.department}</p>
      </div>
    </div>
  );
};

export default Nurse;
