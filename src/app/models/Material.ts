import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Material {
  materialID: number;
  courseID: number;
  fileName: string;
  fileType: string;
  file: Blob;
  active_flag: string;
  status: string;
  last_modified: string;
}
