import { links } from "@/lib/data";
import { StaticImageData } from "next/image";

export type SectionName = (typeof links)[number]["name"];

export interface IprojectsData {
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly imageUrl: StaticImageData;
  readonly liveDemo: string;
  readonly github: string;
}
