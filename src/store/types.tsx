export type UserStateType = {
    id: number,
    name: string,
    money: number,
};

export type PlatationGeneralStateType = {
    id?: number,
    type?: string,
    slot: number,
    state: string,
    planted_at?: Date,
    mature_at?: Date
};

export type PlatationDetailStateType = {

}