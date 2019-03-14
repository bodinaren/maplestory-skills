import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class HeavyGunnerComponent {
    editable: boolean;
    extras: boolean;
    advancedBullets: number;
    advancedMissiles: number;
    advancedPulseWeapons: number;
    blastChargeKit: number;
    bulletSpray: number;
    electricBlast: number;
    gatlingFire: number;
    homingMissiles: number;
    jetBoots: number;
    lockOn: number;
    magneticBomb: number;
    mBomb: number;
    medKit: number;
    reload: number;
    rocketLauncher: number;
    stunGrenades: number;
    suborbitalBombardment: number;
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
    render(): JSX.Element;
}
