import { baseComponents } from "@/packages/baseComponents/index.ts";

type ComponentListEnum = Omit<keyof typeof baseComponents, "symbol">;

export interface BaseComponentItem {
    controlTyppe: ComponentListEnum,

    nameCn: string,

    icon: string  
}