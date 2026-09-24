import type { Service } from "./types";
export type { Service, SubService, ServiceFaq } from "./types";
import { webDevelopment } from "./web-development";
import { digitalMarketing } from "./digital-marketing";
import { geoForHospitality } from "./geo-for-hospitality";

export const services: Service[] = [webDevelopment, digitalMarketing, geoForHospitality];
