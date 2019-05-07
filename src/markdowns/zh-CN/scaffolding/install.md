代码生成工具（脚手架工具）
----------------
*代码生成工具（脚手架工具）[openfin-js-cli] 可以用来生成 样板代码 和 様例工程。 同时，一个开发模式 lyt/view/comp 被建议。 但并不强制开发人员遵守。*


### 安装

全局安装代码生成工具

`npm install openfin-js-cli -g` 或者 `yarn global add openfin-js-cli`

完成后，运行

将会列印参数信息到控制台

```vim
   ___                    __ _             _ ____  
  / _ \ _ __   ___ _ __  / _(_)_ __       | / ___| 
 | | | | '_ \ / _ \ '_ \| |_| | '_ \   _  | \___ \ 
 | |_| | |_) |  __/ | | |  _| | | | | | |_| |___) |
  \___/| .__/ \___|_| |_|_| |_|_| |_|  \___/|____/ 
       |_|                                         
  v0.50.60

   A client to generate openfin javascript app boilerplate codes

  SYNOPSIS
      $ openfin-js react-app <app name>
      $ openfin-js react-app-pro <app name>
      $ openfin-js react-comp <component name>
      $ openfin-js react-view <view component name>
      $ openfin-js react-lyt <layout component name>
      $ openfin-js help
  DESCRIPTION
      --force -f          Create the target file by force, override if any already exist
      --directory -d      Override the default path where the file created
      --verbose -v        Include comments
      --skipInstall       Skip to install node_moduels
```

[openfin-js-cli]: https://www.npmjs.com/package/openfin-js-cli