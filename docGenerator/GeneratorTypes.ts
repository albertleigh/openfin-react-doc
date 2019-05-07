export interface ISeed {
    languages:string[],
    documents:Array<{
        name:string,
        children:string[],
    }>
}


export interface IRouteArgument{
    tabName:string,
    children:Array<{
        FullName:string,
        fullName:string,
        tabName:string,
    }>
}

export interface ICompArgument {
    tabName:string,
    itemName:string,
    FullName:string,
    fullName:string,
    langs:Array<{
        language:string,
        langLabel:string,
        langVar:string,
    }>,
    defaultLang:{
        langVar:string,
    }
}