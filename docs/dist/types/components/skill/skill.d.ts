import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
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
    private publicPath;
    onLevelChanged: EventEmitter<number>;
    onSkillClicked: EventEmitter<ISkill>;
    private overlayLevel;
    componentWillLoad(): void;
    private skillChanged;
    hostData(): {
        "passive": boolean;
    };
    render(): JSX.Element[];
    private showOverlay;
    private hideOverlay;
    private emitSkillClick;
    private plus;
    private minus;
}
