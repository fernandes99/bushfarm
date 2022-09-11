export const mockPlantationList = () => {
    let mock = [];
    let count = 1;

    while (count <= 10) {
        mock.push({
            "slot": count,
            "state": "empty",
        });

        count++
    }

    return mock;
}