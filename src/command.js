class Command {

  constructor(version, platformRetriever = () => process.platform) {
    this.version = version;
    this.platform = platformRetriever();
    this.SETUPTOOLS_VERSION = '46.1.3';
  }
  setuptools() {
    return `${this._sudo()}pip3 install setuptools==${this.SETUPTOOLS_VERSION}`;
  }
  shakespearelang() {
    return `${this._sudo()}pip3 install shakespearelang` + (this.version ? `==${this.version}` : '');
  }
  _sudo() {
    return this.platform !== 'win32' ? 'sudo ' : '';
  }
}

module.exports = Command;