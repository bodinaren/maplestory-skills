export type ClassProperties = [string, string, any, boolean];

export function renderLevelControls(editor: any, properties: ClassProperties[]): JSX.Element[] {
  return properties.filter((props: ClassProperties) => {
    let hasControls = props[3];
    return hasControls;
  }).map((props: ClassProperties) => {
    let property = props[1], values = props[2];
    return (
      <ms-level-control class={ property }
                        onLevelchanged={ (evt) => editor.levelChanged(property, evt.detail) }
                        min={ values.minLevel }
                        max={ values.maxLevel }>
      </ms-level-control>
    );
  });
}

export function renderProperties(classChart: any, properties: ClassProperties[]): string {
  return properties
    .map((props: ClassProperties) => {
        let attribute = props[0], property = props[1], values = props[2];
        return classChart[property] > values.minLevel && `${attribute}="${ classChart[property] }"`;
    }).filter((x) => {
      return !!x;
    }).join(" ");
}
