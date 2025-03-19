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

export type ValidationErrors = Record<string, string[]>;

export type ValidationResult = {
  isValid: boolean;
  errors: ValidationErrors;
};
export type SubscribeToNewsletterFormData = {
  email: string;
}

export type FlightData = {
  flightNumber: string;
  flightDate: string;
}

export type RequestAssistanceFormData = {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  flights: FlightData[];
}

export type DropdownOption = {
  label?: string;
  value: string;
}

export type SectionTitleAndDescription = {
  title?: string;
  description?: string;
}