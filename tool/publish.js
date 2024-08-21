/* eslint-disable import/no-extraneous-dependencies */
/**
 * 发布流程
 * 1. lint
 * 2. jest
 * 3. build
 * 4. up version
 * 5. npm publish
 * 6. git tag
 * 7. git push
 */
const colors = require('colors');
const shell = require('shelljs');
const readline = require('readline');
const pkgConfig = require('../package.json');
shell.set('-e')

let stepNum = 1

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function step(text) {
    const stepStr = `\n${stepNum}/7. `.blue
    console.info(`${stepStr}${text.cyan}`)
    stepNum += 1
}

function publish(version) {
    try {
        step('Lint JavaScript')
        // shell.exec('./node_modules/.bin/eslint component script doc')

        step('Unit Test')
        // shell.exec('npm run test')

        step('Build-lib & Build-dist')
        shell.exec('npm run build')

        step(`Change version to ${version}`)
        shell.sed('-i', `"version": "${pkgConfig.version}"`, `"version": "${version}"`, 'package.json')
        shell.exec(`git commit -am "v${version}"`)

        step('Npm publish')
        shell.exec('npm publish')

        console.info('Package has published successfully.'.green)
    } catch (e) {
        console.info(e.message.red)
        console.info(`Rollabck version to ${pkgConfig.version}`.red)
        shell.sed('-i', `"version": "${version}"`, `"version": "${pkgConfig.version}"`, 'package.json')
        shell.exit(1)
    }
    try {
        step(`Git tag: v${version}`)
        shell.exec(`git tag v${version}`)

        step('Git push')
        shell.exec('git push && git push --tags')
    } catch (e) {
        console.info(e.message.red)
        console.info('Error when git tag or git push, please do it manully.'.red)
    }
    console.info('Done.'.green)
}

function question(text, callback) {
    rl.question(text, (answer) => {
        if (!answer || !answer.trim()) {
            question(text, callback)
        } else {
            callback(answer.trim().toLowerCase())
        }
    })
}

const gitStatus = shell.exec('git status --porcelain', { silent: true }).stdout
if (/^\?\?/m.test(gitStatus)) {
    console.info(`\nThere are untracked files in the working tree.\n${gitStatus}`);
    shell.exit()
}
if (/^([ADRM]| [ADRM])/m.test(gitStatus)) {
    console.info(`\nThere are uncommitted changes in the working tree.\n${gitStatus}`);
    shell.exit()
}

question(`Current version: ${pkgConfig.version.red}, Input your new version: `, (version) => {
    question(`New version: ${version.green}, y/n: `, (answer) => {
        if (answer === 'y') {
            publish(version)
        }
        rl.close()
    })
})
