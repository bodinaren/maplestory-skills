import '../../../stencil.core';
import { ISkillChangeEvent } from "../../charts/skill-change-event";
export declare class OutletComponent {
    editor: string;
    _editor: ClassEditorHTMLElement;
    _skills: ISkillChangeEvent;
    _tagName: string;
    componentDidLoad(): void;
    render()
    private getTag;
    private getProperties;
}
declare type ClassEditorHTMLElement = HTMLMsArcherElement | HTMLMsAssassinElement | HTMLMsBerserkerElement | HTMLMsHeavyGunnerElement | HTMLMsKnightElement | HTMLMsPriestElement | HTMLMsRunebladeElement | HTMLMsThiefElement | HTMLMsWizardElement;
export {};
