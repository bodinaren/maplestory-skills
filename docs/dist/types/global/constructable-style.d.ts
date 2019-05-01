export declare function ConstructibleStyle(options?: ConstructibleStyleOptions): (proto: any, prop: any) => void;
export interface ConstructibleStyleOptions {
    /**
     * Set this in case an instance of a component could produce different styles. This will ensure that you get new styles for each mode.
     * @example
  ```
  @Prop() mode: string;
  @ConstructableStyle({ cacheKeyProperty: "mode" }) style = `.bg { background: url('assets/${ this.mode }/bg.png'); }`;
  ```
     */
    cacheKeyProperty?: string;
}
