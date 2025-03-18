export type Breadcrumb = {
  label: string;
  link: string;
};

export type HeaderAction = {
  label: string;
  iconPath: string;
  link: string;
};

export type NavigationItem = {
  label: string;
  link: string;
  isExternal?: boolean;
};

export type VerticalNavigation = {
  label: string,
  links: NavigationItem[]
}

export type PaymentMethodLinkItem = {
  imagePath: string;
  link: string;
  label: string;
  altText: string;
};

export type SocialLinkItem = {
  imagePath: string;
  link: string;
  label: string;
  altText: string;
};

export type Badge = {
  imagePath: string;
  altText: string;
};

export type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

export type SubscriptionFormData = {
  email: string;
}
