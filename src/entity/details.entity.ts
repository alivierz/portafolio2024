export class Emails {
  googleMap: string;
  info: string;
}

export class ProfileEntity {
  readonly name: string;

  readonly description: string;

  readonly email: string;

  readonly phoneNumber: string;

  readonly availableToWork: boolean;

  readonly years: number;

  readonly projects: number;

  readonly works: number;

  readonly skills: string[];

  readonly map: Emails;
}
