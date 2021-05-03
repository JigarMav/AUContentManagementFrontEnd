export class Subscription {
  userID: number;
  courseID: number;
  email: String;
  constructor(userID, courseID, email) {
    this.courseID = courseID;
    this.userID = userID;
    this.email = email;
  }
}
