export type UserStateType = {
    id: number,
    name: string,
    money: number,
};

export type PlatationStateType = {
    id: number,
    type: string,
    state: string,
    planted_at: Date,
    mature_at: Date
};

[
    {
        "id": 1,
        "type": "Tomato",
        "state": "growing",
        "planted_at": "2022-08-06 14:15:00",
        "mature_at": "2022-09-01 14:15:00"
    }
]