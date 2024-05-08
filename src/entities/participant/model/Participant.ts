export type Nurse = {
  id: number;
  fullName: string;
  department: string;
};


export type Doctor = {
  id: number;
  fullName: string;
  department: string;
  head?: boolean;
}

// NOTE: можно было добавить енам, но решил сэкономить время