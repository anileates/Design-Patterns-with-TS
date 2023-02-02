export default interface INotifier {
    sendNotification(username: string, message: string): void;

    getLastNotificationLog(): Object;
}