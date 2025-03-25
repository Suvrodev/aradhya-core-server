export type TBatch = {
  batchId: string;
  batchName: string;
  underCourse: string;
  start: string;
  end?: string;
  duration: string;
  classNumber: number;
  projectnumber: number;
  instructorname: string;
  instructorimage: string;
  instructorfb: string;
  classdays: string;
  supportdays: string;
  batchStatus: string;
  schedule: { date: string; topic: string }[];
};
