import { ISeed } from './GeneratorTypes'

const seed:ISeed = {
    languages:[
        'en_US', 'zh_CN',
    ],
    documents:[
        {
            name:'start',
            children:['introduction','installation','faq']
        },
        {
            name:'startBase',
            children:['features','reduxs','whyTS']
        },
        {
            name:'scaffolding',
            children:['install','genrPrj','standalonePkg','genrTpl']
        },
        {
            name:'scaffolding',
            children:['install','genrPrj','standalonePkg','genrTpl']
        },
        {
            name:'browserAdaptor',
            children:['install','userCases']
        },
        {
            name:'reduxOpenfin',
            children:['install','commPattern','supportedApis','sharedActions','snapDock']
        },
    ]
}

export default seed;