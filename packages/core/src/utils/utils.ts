export const inheritAriaAttributes = (el: HTMLElement, attributes: string[] = []) => {
  const attributeObject = {};

  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
};

export const INHERITATTRIBUTES = [
  "aria-label",
  "aria-describedby"
]
