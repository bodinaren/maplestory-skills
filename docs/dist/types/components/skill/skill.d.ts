import { EventEmitter } from "..\..\stencil.core";
import { ISkill } from "../../global/values/_skillValues.interfaces";
export declare class SkillComponent {
    level: number;
    skill: ISkill;
    extras: boolean;
    column: number;
    row: number;
    limitReached: boolean;
    locked: boolean;
    required: string;
    disabled: boolean;
    loop: boolean;
    onLevelChanged: EventEmitter<number>;
    onSkillClicked: EventEmitter<ISkill>;
    private overlayLevel;
    styles: string;
    componentWillLoad(): void;
    private skillChanged;
    render(): any;
    private shouldDisableMinus;
    private shouldDisablePlus;
    private showOverlay;
    private hideOverlay;
    private emitSkillClick;
    private plus;
    private minus;
    private static getStyles;
}
