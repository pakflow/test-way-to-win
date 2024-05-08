import NurseTable from '@/widgets/nurse-table/ui/NurseTable';
import { FC } from 'react';
import participants from '@/entities/participant/model/participants.json'

const Nurses: FC = () => {
  return (
    <>
      <NurseTable nurses={participants.nurses}/>
    </>
  );
};

export default Nurses;