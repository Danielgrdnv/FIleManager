export interface ICorrectCords {
    x: number,
    y: number
}

const getCorrectCords = (ref: HTMLElement): ICorrectCords => {
    const value = ref.getBoundingClientRect()
    return value ?
        {
            x: value.x - value.width,
            y: value.y + value.height
        } :
        {
            x: 0,
            y: 0
        }

}

export default getCorrectCords
