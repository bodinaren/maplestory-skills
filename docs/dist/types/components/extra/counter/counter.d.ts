export declare class CounterComponent {
    editor?: string;
    _editor: ClassEditorHTMLElement;
    _pointsLeft: number;
    componentDidLoad(): void;
    private updatePointsLeft;
    render(): number;
}
declare type ClassEditorHTMLElement = HTMLMsArcherElement | HTMLMsAssassinElement | HTMLMsBerserkerElement | HTMLMsHeavyGunnerElement | HTMLMsKnightElement | HTMLMsPriestElement | HTMLMsRunebladeElement | HTMLMsThiefElement | HTMLMsWizardElement;
export {};
