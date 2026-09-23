export interface SanityEvent {
    title: string;
    date?: string;
    time?: string;
    location?: string;
    description?: string;
    image?: any;
}

export interface SiteContent {
    themeFont?: string;
    groupName?: string;
    logo?: any;
    titleAboutUs?: string;
    titlePerformances?: string;
    titleCalendar?: string;
    titleMembers?: string;
    titleContact?: string;
    heroImage?: any;
    tagline?: string;
    aboutText?: string;
    email?: string;
    phone?: string;
    phoneContactName?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    youtubeUrl?: string;
}

export interface SanityPerformance {
    title: string;
    description?: string;
    image?: any;
}

export interface SanityMember {
    name: string;
    role: string;
    image?: any;
}