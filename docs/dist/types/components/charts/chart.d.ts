declare global {
    interface CSSStyleSheet {
        replaceSync(cssText: string): void;
        replace(cssText: string): Promise<CSSStyleSheet>;
    }
}
export declare class ChartComponent {
    msClass: string;
    host: HTMLMsChartElement;
    styles: string;
    componentDidLoad(): void;
    resize(): void;
    render(): any;
    private static getStyles;
}
