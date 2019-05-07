Scaffolding Tool
----------------
*An scaffolding tool called [openfin-js-cli] is provided to help developers to generate boilerplate codes and sample projects. 
Along with it, a simple design pattern lyt/view/comp is also recommended. But developers are not required to follow it 
to utilized the templates.*


### Install

Initially, install the scaffolding tool globally

`npm install openfin-js-cli -g` or `yarn global add openfin-js-cli`

Once installed, run

will dump the help info into the console

```text
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