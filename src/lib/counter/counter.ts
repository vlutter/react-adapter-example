export type CounterOptions = {
    onChange?: () => void;
}

export class Counter {
    public count: number;
    public options: CounterOptions;

    constructor(count: number, options?: CounterOptions) {
        this.count = count;
        this.options = options ?? {};
    }

    public increment(): void {
        this.count = this.count + 1;

        this.update();
    }

    public decrement(): void {
        this.count = this.count - 1;

        this.update();
    }

    public setOptions(options: CounterOptions): void {
        this.options = options;
    }

    private update(): void {
        this.options.onChange?.();
    }
}