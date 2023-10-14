import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    icon: 'bulletList';
  };
  attributes: {
    link_text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    url: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    open_in_new_tab: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    logo_link: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    logo_text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    logo: Attribute.Media;
    menus_links: Attribute.Component<'menu.menu-link', true> &
      Attribute.Required;
  };
}

export interface SectionSectionContent extends Schema.Component {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    metadata: Attribute.Component<'section.section-metadata'>;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    text_grid: Attribute.Component<'section.section-text-grid', true>;
    image_grid: Attribute.Component<'section.section-image-grid', true>;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionSectionImageGrid extends Schema.Component {
  collectionName: 'components_section_section_image_grids';
  info: {
    displayName: 'image-grid';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'grid';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    section_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionTextGrid extends Schema.Component {
  collectionName: 'components_section_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section_two_columns';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
      'menu.menu': MenuMenu;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.section-image-grid': SectionSectionImageGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-text-grid': SectionSectionTextGrid;
      'section.section-two-columns': SectionSectionTwoColumns;
    }
  }
}
