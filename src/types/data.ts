export type QouteList = {
    no: string
    title: string
    description: string
}

export type ImageUrl = {
    mobile: string
    tablet: string
    desktop: string
}


export type PageInfomation = {
    title: string
    qouteList: QouteList[]
    imageUrl: ImageUrl
}
