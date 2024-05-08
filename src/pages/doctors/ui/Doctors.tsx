import DoctorTable from '@/widgets/doctor-table/ui/DoctorTable';
import { FC } from 'react';
import participants from '@/entities/participant/model/participants.json'

const Doctors: FC = () => {
  return (
    <>
      <DoctorTable doctors={participants.doctors}/>
    </>
  );
};

export default Doctors;