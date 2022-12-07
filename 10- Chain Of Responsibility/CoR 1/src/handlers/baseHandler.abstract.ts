abstract class BaseHandler {
    private nextHandler: BaseHandler;

    public setNextHandler(handler: BaseHandler): BaseHandler {
        this.nextHandler = handler;
        return this.nextHandler;
    }

    public abstract handle(username: string, password: string): boolean;

    protected handleNext(username: string, password: string): boolean {
        if (!this.nextHandler) {
            return true;
        }

        return this.nextHandler.handle(username, password);;
    }
}

export default BaseHandler;