type Option = {
  name: string;
  displayName: string;
  flagUrl: string;
};

type categoryOption = {
  label: string;
  value: string;
};

type OptionType = "country" | "language";

export const countryOptions: Option[] = [
  {
    name: "gb",
    displayName: "United Kingdom",
    flagUrl: "https://flagcdn.com/w40/gb.png"
  },
  {
    name: "fr",
    displayName: "France",
    flagUrl: "https://flagcdn.com/w40/fr.png"
  },
  {
    name: "de",
    displayName: "Germany",
    flagUrl: "https://flagcdn.com/w40/de.png"
  },
  {
    name: "us",
    displayName: "United States",
    flagUrl: "https://flagcdn.com/w40/us.png"
  },
  {
    name: "in",
    displayName: "India",
    flagUrl: "https://flagcdn.com/w40/in.png"
  }
];

export const languageOptions: Option[] = [
  {
    name: "gb",
    displayName: "English UK",
    flagUrl: "https://flagcdn.com/w40/gb.png"
  },
  {
    name: "fr",
    displayName: "French",
    flagUrl: "https://flagcdn.com/w40/fr.png"
  },
  {
    name: "de",
    displayName: "German",
    flagUrl: "https://flagcdn.com/w40/de.png"
  },
  {
    name: "us",
    displayName: "English US",
    flagUrl: "https://flagcdn.com/w40/us.png"
  },
  {
    name: "in",
    displayName: "Hindi",
    flagUrl: "https://flagcdn.com/w40/in.png"
  }
];

export const categoryOptions: categoryOption[] = [
  { label: "Animals / Pets", value: "animals_pets" },
  { label: "Art", value: "art" },
  { label: "Auto", value: "auto" },
  { label: "Beauty", value: "beauty" },
  { label: "Blogging", value: "blogging" },
  { label: "Business / Entrepreneur", value: "business_entrepreneur" },
  { label: "Directory", value: "directory" },

  { label: "Education", value: "education" },
  { label: "Energy & Solar Energy", value: "energy_solar" },
  { label: "Entertainment & Music", value: "entertainment_music" },
  { label: "Environment", value: "environment" },
  { label: "Events", value: "events" },
  { label: "Family / Parenting", value: "family_parenting" },
  { label: "Fashion", value: "fashion" },
  { label: "Finance", value: "finance" },

  { label: "Food", value: "food" },
  { label: "Gambling", value: "gambling" },
  { label: "Gaming", value: "gaming" },
  { label: "General", value: "general" },
  { label: "Health & Fitness", value: "health_fitness" },
  { label: "Home & Garden", value: "home_garden" },
  { label: "Italian Sites", value: "italian_sites" },
  { label: "Legal", value: "legal" },

  { label: "Lifestyle", value: "lifestyle" },
  { label: "Marijuana / Vaporizers", value: "marijuana_vaporizers" },
  { label: "Marketing", value: "marketing" },
  { label: "Medical", value: "medical" },
  { label: "News", value: "news" },
  { label: "Other", value: "other" },
  { label: "Outdoors", value: "outdoors" },
  { label: "Photography", value: "photography" },

  { label: "Politics", value: "politics" },
  { label: "Real Estate", value: "real_estate" },
  { label: "EnvironmentSafety", value: "environment_safety" },
  { label: "SEO", value: "seo" },
  { label: "Sex & Adult", value: "sex_adult" },
  { label: "Shopping", value: "shopping" }
];

export const getOptions = (type: OptionType): Option[] => {
  return type === "country" ? countryOptions : languageOptions;
};

export const dummyData = [
  {
    noOfLinksAdvertise: "1",
    noOfWords: "1",
    isSamePrice: "same",
    enterSamePrice: "100",
    homePageLinkPrice: 200,
    linkInsertion: 100,
    guestPosting: 100,
    offerGuidelines: "testing",
    description: "here",
    mainCategory: ["animals_pets", "education"],
    majorTraffic: "in",
    primaryLang: "in",
    website: "https://dev.test1.com",
    owner: ["isOwner"],
    writingArticleIncluded: "1",
    allowDoFollow: "",
    typesOfLink: "",
    taggingArticle: "4",
    otherLinks: "",
    otherContent: "",
    hasConsented: true,
    id: "QQ1fhWM88GvyWBI22TIwB"
  },
  {
    noOfLinksAdvertise: "1",
    noOfWords: "1",
    isSamePrice: "",
    adultLinkInsert: 200,
    adultGuestPost: 200,
    crptoLinkInsert: 200,
    crptoGuestPost: 200,
    gamblingLinkInsert: 200,
    gamblingGuestPost: 200,
    enterSamePrice: "",
    homePageLinkPrice: 200,
    linkInsertion: 100,
    guestPosting: 100,
    offerGuidelines: "testing",
    description: "Testing",
    mainCategory: ["environment", "general", "medical", "seo"],
    majorTraffic: "in",
    primaryLang: "us",
    website: "https://dev.test.com",
    owner: ["isOwner"],
    writingArticleIncluded: "2",
    allowDoFollow: "2",
    typesOfLink: "1",
    taggingArticle: "3",
    otherLinks: "2",
    otherContent: "200",
    hasConsented: true,
    id: "gAMClFCg-jetrlRYIwJbq"
  }
];
