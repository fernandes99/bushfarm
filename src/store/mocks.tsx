export const mockPlantationList = () => {
    let mock = [];
    let count = 0;

    while (count <= 9) {
        mock.push({
            "slot": count,
            "state": "empty",
        });

        count++
    }

    return mock;
}