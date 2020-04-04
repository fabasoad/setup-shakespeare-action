const core = require('@actions/core');
const { exec } = require('@actions/exec');

const version = core.getInput('version');

const SETUPTOOLS_VERSION = '46.1.3';

(async () => {
  try {
    const sudo = process.platform !== 'win32' ? 'sudo ' : '';
    // setuptools==${SETUPTOOLS_VERSION} 
    await exec(`${sudo}pip3 install shakespearelang`/* + (version ? `==${version}` : '')*/);
  } catch (e) {
    core.setFailed(e.message);
  }
})();