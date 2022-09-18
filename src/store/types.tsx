export type UserStateType = {
    data: UserDataType,
    inventory: UserInventoryType,
};

export type UserInventoryType = {
    seeds: SeedType[],
}

export type SeedType = {
    id: number,
    type: string
}

export type UserDataType = {
    id: number,
    name: string,
    money: number,
}

export type PlatationGeneralStateType = {
    id: number,
    type?: string,
    slot: number,
    state: string,
    planted_at?: Date,
    mature_at?: Date
};

export type PlatationDetailStateType = {

}