import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class ArcherComponent {
    editable: boolean;
    extras: boolean;
    agileArcher: number;
    arrowBarrage: number;
    arrowStorm: number;
    arrowStream: number;
    bowSwing: number;
    bronzeEagle: number;
    conditioning: number;
    eagleClaw: number;
    eagleGlide: number;
    eaglesMajesty: number;
    evasiveSalvo: number;
    iceArrow: number;
    precisionShooter: number;
    rapidShot: number;
    screwdriverShot: number;
    sharpEyes: number;
    snipe: number;
    skills: {
        [prop: string]: {
            locked: boolean;
            required: string;
            active: boolean;
        };
    };
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): Promise<void>;
    emitChangeEvent(): void;
    render(): JSX.Element[];
}
