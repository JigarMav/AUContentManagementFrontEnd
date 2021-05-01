export class User {
  // names should match from User model built in Java. can also add additional attributes
  userID: number;
  provider: string;
  email: string;
  userName: string;
  photo: string;
  userLocation: string;

  public constructor(
    userID: number,
    provider: string,
    email: string,
    userName: string,
    photo: string,
    userLocation: string
  ) {
    this.userID = userID;
    this.provider = provider;
    this.email = email;
    this.userName = userName;
    this.photo = photo;
    this.userLocation = userLocation;
  }
}
