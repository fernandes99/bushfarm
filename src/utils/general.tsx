export const getDiffTime = (time: string) => {
    let current:any = new Date();
        current = current.getTime();
    let matureAt:any = new Date(time);
        matureAt = matureAt.getTime();

    let diff = Math.round((matureAt - current) / 1000);
    const day = Math.floor(diff / (24 * 60 * 60));
    diff = diff - (day * 24 * 60 * 60);

    const hour = Math.floor(diff / (60 * 60));
    diff = diff - (hour * 60 * 60);

    const minute = Math.floor(diff/(60));
    diff = diff - (minute * 60);

    const second = diff;

    return { day, hour, minute, second };
}