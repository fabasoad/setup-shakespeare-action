module.exports=(()=>{var e={241:function(e,t,i){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=r(i(87));const n=i(278);function issueCommand(e,t,i){const r=new Command(e,t,i);process.stdout.write(r.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,i){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=i}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const i in this.properties){if(this.properties.hasOwnProperty(i)){const r=this.properties[i];if(r){if(t){t=false}else{e+=","}e+=`${i}=${escapeProperty(r)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function escapeData(e){return n.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return n.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){s(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=i(241);const o=i(717);const u=i(278);const c=s(i(87));const l=s(i(622));var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const i=u.toCommandValue(t);process.env[e]=i;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${c.EOL}${i}${c.EOL}${t}`;o.issueCommand("ENV",r)}else{n.issueCommand("set-env",{name:e},i)}}t.exportVariable=exportVariable;function setSecret(e){n.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){o.issueCommand("PATH",e)}else{n.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const i=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!i){throw new Error(`Input required and not supplied: ${e}`)}return i.trim()}t.getInput=getInput;function setOutput(e,t){n.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){n.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){n.issueCommand("debug",{},e)}t.debug=debug;function error(e){n.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){n.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+c.EOL)}t.info=info;function startGroup(e){n.issue("group",e)}t.startGroup=startGroup;function endGroup(){n.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return r(this,void 0,void 0,function*(){startGroup(e);let i;try{i=yield t()}finally{endGroup()}return i})}t.group=group;function saveState(e,t){n.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,i){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=r(i(747));const n=r(i(87));const o=i(278);function issueCommand(e,t){const i=process.env[`GITHUB_${e}`];if(!i){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!s.existsSync(i)){throw new Error(`Missing file at path: ${i}`)}s.appendFileSync(i,`${o.toCommandValue(t)}${n.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},514:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){s(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=s(i(159));function exec(e,t,i){return r(this,void 0,void 0,function*(){const r=n.argStringToArray(e);if(r.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const s=r[0];t=r.slice(1).concat(t||[]);const o=new n.ToolRunner(s,t,i);return o.exec()})}t.exec=exec},159:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){s(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=s(i(87));const o=s(i(614));const u=s(i(129));const c=s(i(622));const l=s(i(436));const f=s(i(962));const a=process.platform==="win32";class ToolRunner extends o.EventEmitter{constructor(e,t,i){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=i||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const i=this._getSpawnFileName();const r=this._getSpawnArgs(e);let s=t?"":"[command]";if(a){if(this._isCmdFile()){s+=i;for(const e of r){s+=` ${e}`}}else if(e.windowsVerbatimArguments){s+=`"${i}"`;for(const e of r){s+=` ${e}`}}else{s+=this._windowsQuoteCmdArg(i);for(const e of r){s+=` ${this._windowsQuoteCmdArg(e)}`}}}else{s+=i;for(const e of r){s+=` ${e}`}}return s}_processLineBuffer(e,t,i){try{let r=t+e.toString();let s=r.indexOf(n.EOL);while(s>-1){const e=r.substring(0,s);i(e);r=r.substring(s+n.EOL.length);s=r.indexOf(n.EOL)}t=r}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(a){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(a){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const i of this.args){t+=" ";t+=e.windowsVerbatimArguments?i:this._windowsQuoteCmdArg(i)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let i=false;for(const r of e){if(t.some(e=>e===r)){i=true;break}}if(!i){return e}let r='"';let s=true;for(let t=e.length;t>0;t--){r+=e[t-1];if(s&&e[t-1]==="\\"){r+="\\"}else if(e[t-1]==='"'){s=true;r+='"'}else{s=false}}r+='"';return r.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let i=true;for(let r=e.length;r>0;r--){t+=e[r-1];if(i&&e[r-1]==="\\"){t+="\\"}else if(e[r-1]==='"'){i=true;t+="\\"}else{i=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const i={};i.cwd=e.cwd;i.env=e.env;i["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){i.argv0=`"${t}"`}return i}exec(){return r(this,void 0,void 0,function*(){if(!f.isRooted(this.toolPath)&&(this.toolPath.includes("/")||a&&this.toolPath.includes("\\"))){this.toolPath=c.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield l.which(this.toolPath,true);return new Promise((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const i=this._cloneExecOptions(this.options);if(!i.silent&&i.outStream){i.outStream.write(this._getCommandString(i)+n.EOL)}const r=new ExecState(i,this.toolPath);r.on("debug",e=>{this._debug(e)});const s=this._getSpawnFileName();const o=u.spawn(s,this._getSpawnArgs(i),this._getSpawnOptions(this.options,s));const c="";if(o.stdout){o.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!i.silent&&i.outStream){i.outStream.write(e)}this._processLineBuffer(e,c,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}const l="";if(o.stderr){o.stderr.on("data",e=>{r.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!i.silent&&i.errStream&&i.outStream){const t=i.failOnStdErr?i.errStream:i.outStream;t.write(e)}this._processLineBuffer(e,l,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}o.on("error",e=>{r.processError=e.message;r.processExited=true;r.processClosed=true;r.CheckComplete()});o.on("exit",e=>{r.processExitCode=e;r.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);r.CheckComplete()});o.on("close",e=>{r.processExitCode=e;r.processExited=true;r.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);r.CheckComplete()});r.on("done",(i,r)=>{if(c.length>0){this.emit("stdline",c)}if(l.length>0){this.emit("errline",l)}o.removeAllListeners();if(i){t(i)}else{e(r)}});if(this.options.input){if(!o.stdin){throw new Error("child process missing stdin")}o.stdin.end(this.options.input)}})})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let i=false;let r=false;let s="";function append(e){if(r&&e!=='"'){s+="\\"}s+=e;r=false}for(let n=0;n<e.length;n++){const o=e.charAt(n);if(o==='"'){if(!r){i=!i}else{append(o)}continue}if(o==="\\"&&r){append(o);continue}if(o==="\\"&&i){r=true;continue}if(o===" "&&!i){if(s.length>0){t.push(s);s=""}continue}append(o)}if(s.length>0){t.push(s.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends o.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},962:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){s(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};var n;Object.defineProperty(t,"__esModule",{value:true});const o=i(357);const u=s(i(747));const c=s(i(622));n=u.promises,t.chmod=n.chmod,t.copyFile=n.copyFile,t.lstat=n.lstat,t.mkdir=n.mkdir,t.readdir=n.readdir,t.readlink=n.readlink,t.rename=n.rename,t.rmdir=n.rmdir,t.stat=n.stat,t.symlink=n.symlink,t.unlink=n.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return r(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,i=false){return r(this,void 0,void 0,function*(){const r=i?yield t.stat(e):yield t.lstat(e);return r.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,i=1e3,s=1){return r(this,void 0,void 0,function*(){o.ok(e,"a path argument must be provided");e=c.resolve(e);if(s>=i)return t.mkdir(e);try{yield t.mkdir(e);return}catch(r){switch(r.code){case"ENOENT":{yield mkdirP(c.dirname(e),i,s+1);yield t.mkdir(e);return}default:{let i;try{i=yield t.stat(e)}catch(e){throw r}if(!i.isDirectory())throw r}}}})}t.mkdirP=mkdirP;function tryGetExecutablePath(e,i){return r(this,void 0,void 0,function*(){let r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){const t=c.extname(e).toUpperCase();if(i.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(r)){return e}}}const s=e;for(const n of i){e=s+n;r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){try{const i=c.dirname(e);const r=c.basename(e).toUpperCase();for(const s of yield t.readdir(i)){if(r===s.toUpperCase()){e=c.join(i,s);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(r)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},436:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){s(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=s(i(129));const o=s(i(622));const u=i(669);const c=s(i(962));const l=u.promisify(n.exec);function cp(e,t,i={}){return r(this,void 0,void 0,function*(){const{force:r,recursive:s}=readCopyOptions(i);const n=(yield c.exists(t))?yield c.stat(t):null;if(n&&n.isFile()&&!r){return}const u=n&&n.isDirectory()?o.join(t,o.basename(e)):t;if(!(yield c.exists(e))){throw new Error(`no such file or directory: ${e}`)}const l=yield c.stat(e);if(l.isDirectory()){if(!s){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,r)}}else{if(o.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,r)}})}t.cp=cp;function mv(e,t,i={}){return r(this,void 0,void 0,function*(){if(yield c.exists(t)){let r=true;if(yield c.isDirectory(t)){t=o.join(t,o.basename(e));r=yield c.exists(t)}if(r){if(i.force==null||i.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(o.dirname(t));yield c.rename(e,t)})}t.mv=mv;function rmRF(e){return r(this,void 0,void 0,function*(){if(c.IS_WINDOWS){try{if(yield c.isDirectory(e,true)){yield l(`rd /s /q "${e}"`)}else{yield l(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield c.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield c.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield l(`rm -rf "${e}"`)}else{yield c.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return r(this,void 0,void 0,function*(){yield c.mkdirP(e)})}t.mkdirP=mkdirP;function which(e,t){return r(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(c.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}return t}const i=yield findInPath(e);if(i&&i.length>0){return i[0]}return""})}t.which=which;function findInPath(e){return r(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}const t=[];if(c.IS_WINDOWS&&process.env["PATHEXT"]){for(const e of process.env["PATHEXT"].split(o.delimiter)){if(e){t.push(e)}}}if(c.isRooted(e)){const i=yield c.tryGetExecutablePath(e,t);if(i){return[i]}return[]}if(e.includes(o.sep)){return[]}const i=[];if(process.env.PATH){for(const e of process.env.PATH.split(o.delimiter)){if(e){i.push(e)}}}const r=[];for(const s of i){const i=yield c.tryGetExecutablePath(o.join(s,e),t);if(i){r.push(i)}}return r})}t.findInPath=findInPath;function readCopyOptions(e){const t=e.force==null?true:e.force;const i=Boolean(e.recursive);return{force:t,recursive:i}}function cpDirRecursive(e,t,i,s){return r(this,void 0,void 0,function*(){if(i>=255)return;i++;yield mkdirP(t);const r=yield c.readdir(e);for(const n of r){const r=`${e}/${n}`;const o=`${t}/${n}`;const u=yield c.lstat(r);if(u.isDirectory()){yield cpDirRecursive(r,o,i,s)}else{yield copyFile(r,o,s)}}yield c.chmod(t,(yield c.stat(e)).mode)})}function copyFile(e,t,i){return r(this,void 0,void 0,function*(){if((yield c.lstat(e)).isSymbolicLink()){try{yield c.lstat(t);yield c.unlink(t)}catch(e){if(e.code==="EPERM"){yield c.chmod(t,"0666");yield c.unlink(t)}}const i=yield c.readlink(e);yield c.symlink(i,t,c.IS_WINDOWS?"junction":null)}else if(!(yield c.exists(t))||i){yield c.copyFile(e,t)}})}},134:e=>{class Command{constructor(e,t=(()=>process.platform)){this.version=e;this.platform=t();this.SETUPTOOLS_VERSION="46.1.3"}setuptools(){return`${this._sudo()}pip3 install setuptools==${this.SETUPTOOLS_VERSION}`}shakespearelang(){return`${this._sudo()}pip3 install shakespearelang`+(this.version?`==${this.version}`:"")}_sudo(){return this.platform!=="win32"?"sudo ":""}}e.exports=Command},351:(e,t,i)=>{const r=i(186);const{exec:s}=i(514);const n=i(134);const o=r.getInput("version");(async()=>{try{const e=new n(o);await s(e.setuptools());await s(e.shakespearelang())}catch(e){r.setFailed(e.message)}})()},357:e=>{"use strict";e.exports=require("assert")},129:e=>{"use strict";e.exports=require("child_process")},614:e=>{"use strict";e.exports=require("events")},747:e=>{"use strict";e.exports=require("fs")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},669:e=>{"use strict";e.exports=require("util")}};var t={};function __nccwpck_require__(i){if(t[i]){return t[i].exports}var r=t[i]={exports:{}};var s=true;try{e[i].call(r.exports,r,r.exports,__nccwpck_require__);s=false}finally{if(s)delete t[i]}return r.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(351)})();