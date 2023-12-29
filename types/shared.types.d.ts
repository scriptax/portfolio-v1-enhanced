export interface PictureType {
  fields: {
    title: string;
    description: string;
    file: {
      contentType: any;
      fileName: string;
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
  metadata: any;
  sys: any;
}

export interface WorkType {
  fields: {
    name: string;
    description: string;
    live: string;
    repo: string;
    stack: string[];
    screenshot: PictureType;
  };
  metadata: any;
  sys: any;
}

export interface ContentType {
  name: string;
  aboutMe: string;
  location: string;
  role: string;
  skillsText: string;
  skills: string[];
  works: WorkType[];
  otherSkills: string[];
  contactText: string;
  socialLinks: string[][];
}
