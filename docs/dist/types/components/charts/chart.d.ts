import { EventEmitter } from "../../stencil.core";
export declare class ChartComponent {
    host: HTMLMsChartElement;
    msClass: string;
    rank: number;
    onRankChanged: EventEmitter<number>;
    styles: any;
    componentDidLoad(): void;
    resize(): void;
    private changeRank;
    render(): any;
    private static getStyles;
}
