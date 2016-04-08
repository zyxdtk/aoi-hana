# aoi-hana

**Human in China history.**

 [![Build Status](https://img.shields.io/travis/ueqt/aoi-hana.svg)](https://travis-ci.org/ueqt/aoi-hana)
[![Dependency Status](https://img.shields.io/david/ueqt/aoi-hana.svg)](https://david-dm.org/ueqt/aoi-hana)
[![devDependency Status](https://img.shields.io/david/dev/ueqt/aoi-hana.svg)](https://david-dm.org/ueqt/aoi-hana#info=devDependencies)

## To Use

```bash
# Clone this repository
git clone https://github.com/ueqt/aoi-hana
# Go into the repository
cd aoi-hana
# Install dependencies and run the app
npm install && npm start
```

## To Release

```bash
git tag -a "v0.1.0" -m "test auto release from travis"
git push origin master --tags
```

## Solve electron-prebuilt postinstall error

Ref https://github.com/electron-userland/electron-prebuilt/issues/69#issuecomment-164636460

```bash
rm -rf ~/.electron/
rm -rf ~/.atom/
npm cache clear
npm install
```