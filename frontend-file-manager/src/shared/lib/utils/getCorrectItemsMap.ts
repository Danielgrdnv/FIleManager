import {OrderedMap} from "immutable";

export const getCorrectItemsMap = <T extends { id: number }>(newItems: T[]) => {
    let newMap: any = OrderedMap()
    for (let i in newItems) {
        let newItem = newItems[i];
        newMap = newMap.set(newItem.id, newItem)
    }
    return newMap;
}
