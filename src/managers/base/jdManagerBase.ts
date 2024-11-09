import { runInAction } from 'mobx';

export abstract class JdManagerBase<T extends object> {
    public abstract store: T;
    private delayedTimeout: Timer | undefined = undefined;

    public async setStateAsync(newState: Partial<T>, isDelayed?: boolean): Promise<void> {
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            try {
                if (this.delayedTimeout) clearTimeout(this.delayedTimeout);
                this.delayedTimeout = setTimeout(
                    () => {
                        runInAction(() => {
                            Object.assign(this.store, { ...newState });
                        });
                        resolve();
                    },
                    isDelayed ? 800 : 0,
                );
            } catch (error) {
                reject();
            }
        });
    }

    public async jdRunInAction(callBack: () => void | Promise<void>): Promise<void> {
        return new Promise(async (resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            try {
                await runInAction(async (): Promise<void> => {
                    await callBack();
                });
                resolve();
            } catch (error) {
                reject();
            }
        });
    }
}
