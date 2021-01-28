export type item {
  node: navItem | contentItem
}

export interface navItem {
  element: navElement
  system: System
}

export interface contentItem {
  element: contentElement
  system: System
}

export interface contentElement {
  body: { value: string }
  post_tags: {
    value: { name: string }
  }
  product_description: { value: string }
  published: { value: string }
  title: { value: string }
  url: { value: string }
  why_the_product_is_useful: { value: string }
}
export interface navElement {
  subitems: {
    value: Array<contentElement>
  }
}
export interface System {
  codename: string;
  type: string;
}