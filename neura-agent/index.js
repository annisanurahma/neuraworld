#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';
import { execSync } from 'child_process';

const log = console.log;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function displayBanner() {
    console.clear();
    const title = figlet.textSync('NeuraAgent', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    });

    log(gradient.pastel.multiline(title));

    log(boxen(chalk.cyan(' The Premium Wrapper for Bankr AI '), {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan',
        backgroundColor: '#111'
    }));
}

function executeBankr(args) {
    try {
        log(chalk.gray(`> Executing: bankr ${args}`));
        execSync(`bankr ${args}`, { stdio: 'inherit' });
    } catch (error) {
        log(chalk.red('\n✖ Command failed or was cancelled.'));
    }
}

async function handleLogin() {
    const { loginType } = await inquirer.prompt([
        {
            type: 'list',
            name: 'loginType',
            message: 'Select Login Method:',
            choices: [
                'Interactive Login (Default)',
                'Login with Email',
                'Login with API Key',
                'Back'
            ]
        }
    ]);

    if (loginType === 'Back') return;

    if (loginType === 'Interactive Login (Default)') {
        executeBankr('login');
    } else if (loginType === 'Login with Email') {
        const { email } = await inquirer.prompt([{ type: 'input', name: 'email', message: 'Enter your email:' }]);
        executeBankr(`login email ${email}`);
    } else if (loginType === 'Login with API Key') {
        const { apiKey } = await inquirer.prompt([{ type: 'password', name: 'apiKey', message: 'Enter your API Key:' }]);
        executeBankr(`login --api-key ${apiKey}`);
    }
}

async function handlePrompt() {
    const { promptMode } = await inquirer.prompt([
        {
            type: 'list',
            name: 'promptMode',
            message: 'Select Prompt Mode:',
            choices: [
                'Quick Prompt',
                'Interactive Chat (Continue)',
                'Back'
            ]
        }
    ]);

    if (promptMode === 'Back') return;

    if (promptMode === 'Quick Prompt') {
        const { query } = await inquirer.prompt([{ type: 'input', name: 'query', message: 'Enter your prompt:' }]);
        const spinner = ora('Processing with NeuraAgent...').start();
        try {
            spinner.stop();
            executeBankr(`"${query}"`);
        } catch (e) {
            spinner.fail('Failed');
        }
    } else {
        log(chalk.yellow('Starting interactive session (Type "exit" to quit)...'));
        let running = true;
        while (running) {
            const { query } = await inquirer.prompt([{ type: 'input', name: 'query', message: 'Neura >' }]);
            if (query.toLowerCase() === 'exit') {
                running = false;
                break;
            }
            executeBankr(`prompt --continue "${query}"`);
        }
    }
}

async function main() {
    await displayBanner();

    while (true) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'Login / Auth',
                    'New Prompt',
                    'Check Status (Whoami)',
                    'Configuration',
                    'Exit'
                ]
            }
        ]);

        switch (action) {
            case 'Login / Auth':
                await handleLogin();
                break;
            case 'New Prompt':
                await handlePrompt();
                break;
            case 'Check Status (Whoami)':
                executeBankr('whoami');
                await inquirer.prompt([{ type: 'input', name: 'cont', message: 'Press Enter to continue...' }]);
                break;
            case 'Configuration':
                executeBankr('config get');
                await inquirer.prompt([{ type: 'input', name: 'cont', message: 'Press Enter to continue...' }]);
                break;
            case 'Exit':
                log(chalk.green('Goodbye! NeuraAgent works for you.'));
                process.exit(0);
        }

        await displayBanner();
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
