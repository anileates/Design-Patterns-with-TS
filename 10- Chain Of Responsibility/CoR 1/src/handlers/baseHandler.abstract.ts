abstract class BaseHandler {
    private nextHandler: BaseHandler;

    public setNextHandler(handler: BaseHandler): BaseHandler {
        this.nextHandler = handler;
        return this.nextHandler;
    }

    // Each handler has its own logic.
    public abstract handle(username: string, password: string): boolean;

    protected handleNext(username: string, password: string): boolean {
        // If there is no next handler, return true.
        if (!this.nextHandler) {
            return true;
        }

        return this.nextHandler.handle(username, password);;
    }
}

export default BaseHandler;