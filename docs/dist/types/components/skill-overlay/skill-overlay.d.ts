import '../../stencil.core';
import { ISkill } from "../../global/values/_skillValues.interfaces";
/**
 * @private
 */
export declare class SkillOverlayComponent {
    private publicPath;
    level: number;
    skill: ISkill;
    extras: boolean;
    private requirements;
    private spirit;
    private cooldown;
    private description;
    private extraDescriptions;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    private refreshData;
    render(): JSX.Element;
    private setRequirements;
    private setSpirit;
    private setCooldown;
    private parseDescription;
}
