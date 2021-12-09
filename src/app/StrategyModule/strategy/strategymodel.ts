import { Indicator } from "./indicatormodel";

export class Strategy {
    strategy_id?: number;
    strategy_name?: string;
    strategy_desc?: string;
    indicators?: Indicator[];
    is_enabled?:boolean
}