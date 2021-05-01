import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Material {
  materialID: number;
  courseID: number;
  trainerID: number;
  trainerName: string;
  fileName: string;
  fileType: string;
  file: Blob;
  active_flag: string;
  status: string;
  created_on: string;
  last_modified: string;
}
