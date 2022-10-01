export interface ComponentConfig {
  styleKeys?: string[];
  classGenerator: any;
}

function getAdditionalClassesForConfig(
  baseClassName: string,
  classGenerator: ComponentConfig['classGenerator'],
  props: any
) {
  let classes = props.className || '';
  Object.keys(classGenerator).forEach((prop) => {
    const propConfig = classGenerator[prop];
    if (propConfig.type === 'value') {
      classes += ` ${baseClassName}--${prop}-${
        props[prop] || propConfig.default
      }`;
      return;
    }
    if (propConfig.type === 'boolean') {
      if (props[prop]) {
        classes += ` ${baseClassName}--${prop}`;
      }
    }
  });
  return classes;
}

export function getClassName(
  componentName: string,
  componentConfig: ComponentConfig,
  props: any,
  additionalClassName?: string
) {
  const additionalClassesForConfig = getAdditionalClassesForConfig(
    componentName,
    componentConfig.classGenerator,
    props
  );
  const className = `${additionalClassName || ''} ${componentName} ${
    additionalClassesForConfig || ''
  }`;
  return className.trim().replace(/(\s{2,})+/g, ' ');
}
