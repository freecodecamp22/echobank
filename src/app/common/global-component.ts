import { Account } from 'src/app/models/account.model';

export class GlobalComponent {

  public static appUrl: string = 'https://www.example.com/';
  public static appName: string = 'Example Site';
  public static appLogo: string = 'assets/images/logo.png';
  public static appEmail: string = 'johndoe@example.com';

  public accounts: Account[] = [];
}
