const core = require('@actions/core');
const { exec } = require('@actions/exec');
const Command = require('./command');

const version = core.getInput('version');

(async () => {
  try {
    const command = new Command(version); ;
    await exec(command.setuptools());
    await exec(command.shakespearelang());
  } catch (e) {
    core.setFailed(e.message);
  }
})();
