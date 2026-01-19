export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}
