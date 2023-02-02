import BaseNotifierDecorator from "./baseNotifierDecorator";
import INotifier from "./notifier.interface";

class FacebookNotifier extends BaseNotifierDecorator {
  constructor(notifier: INotifier) {
    super(notifier);
  }

  public sendNotification(username: string, message: string): void {
    super.sendNotification(username, message);
    console.log('Sending notification via Facebook');
  }
}

export default FacebookNotifier;