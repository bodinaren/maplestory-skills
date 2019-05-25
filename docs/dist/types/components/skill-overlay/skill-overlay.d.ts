import { ISkill } from "../../global/values/_skillValues.interfaces";
/**
 * @private
 */
export declare class SkillOverlayComponent {
    level: number;
    skill: ISkill;
    extras: boolean;
    private requirements;
    private stamina;
    private spirit;
    private cooldown;
    private description;
    private extraDescriptions;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    private refreshData;
    render(): any;
    private setRequirements;
    private setStamina;
    private setSpirit;
    private setCooldown;
    private parseDescription;
    private getGradient;
}
