import { TabConfig } from "../types/tabConfig.types";

export const FILTER_TABS_CONFIG: TabConfig[] = [
    {
        text: 'Все',
        status: null,
    },
    {
        text: 'Активные',
        status: '1',
    },
    {
        text: 'Истекающие',
        status: '2',
    },
    {
        text: 'Просроченные',
        status: '3',
    },
]