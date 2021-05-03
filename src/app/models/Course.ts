type NewType = number;

export class Course {
  courseID: NewType;
  creatorID: number;
  courseName: string;
  courseDesc: string;
  courseSkills: string;
  coursePrerequisites: string;
  courseLocation: string;
  last_modified: string;

  constructor(
    creatorID: number,
    courseName,
    courseDesc,
    courseSkills,
    coursePrerequisites,
    courseLocation
  ) {
    this.courseID = -1;
    this.creatorID = creatorID;
    this.courseDesc = courseDesc;
    this.courseSkills = courseSkills;
    this.courseName = courseName;
    this.coursePrerequisites = coursePrerequisites;
    this.courseLocation = courseLocation;
    this.last_modified = '';
  }
}
