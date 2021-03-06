import { ISeed } from './GeneratorTypes'

const seed:ISeed = {
    defaultLanguageIndex: 0,
    languages:[
        'en_US', 'zh_CN',
    ],
    documents:[
        {
            name:'start',
            children:['introduction','installation','faq']
        },
        {
            name:'starterBase',
            children:['features','dependencies','routes','reuseableComps','constants','scripts','contextApis','whyTs']
        },
        {
            name:'scaffolding',
            children:['install','genrPrj','standalonePkg','genrTpl']
        },
        {
            name:'professional',
            children:['connRedux', 'actionsList', 'reduxsStateStruct', 'startCloseWin', 'sharedActions','reduxOpenfin']
        },
        // {
        //     name:'browserAdaptor',
        //     children:['install','userCases']
        // },
        // {
        //     name:'reduxOpenfin',
        //     children:['install','commPattern','supportedApis','sharedActions','snapDock']
        // },
    ]
}

export default seed;