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

// --- THEME & STYLES ---
const theme = {
    primary: chalk.hex('#00F0FF'), // Neon Cyan
    secondary: chalk.hex('#FF003C'), // Neon Red/Magenta
    text: chalk.hex('#E0E0E0'),
    dim: chalk.hex('#666666'),
    boxInfo: {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan',
        backgroundColor: '#111'
    },
    boxError: {
        padding: 1,
        margin: 1,
        borderStyle: 'double',
        borderColor: 'red'
    }
};

// --- UTILS ---

async function typeWriter(text, speed = 30) {
    for (const char of text) {
        process.stdout.write(theme.text(char));
        await sleep(speed);
    }
    process.stdout.write('\n');
}

async function systemStartup() {
    console.clear();
    const spinner = ora(theme.primary('Initializing MOLTNKR Core...')).start();
    await sleep(800);
    spinner.color = 'magenta';
    spinner.text = theme.secondary('Establishing Secure Connection...');
    await sleep(800);
    spinner.color = 'cyan';
    spinner.text = theme.primary('Loading Modules [###-------]');
    await sleep(600);
    spinner.text = theme.primary('Loading Modules [#######---]');
    await sleep(600);
    spinner.succeed(theme.primary('System Online by @NeuraWorld'));
    await sleep(500);
}

async function displayBanner() {
    console.clear();
    const title = figlet.textSync('MOLTNKR', {
        font: 'Standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    });

    log(gradient.pastel.multiline(title));

    log(boxen(theme.primary(' v1.0.0 ') + theme.dim(' | ') + theme.secondary(' CONNECTED ') + theme.dim(' | ') + theme.text(' SYSTEM READY '), {
        padding: { top: 0, bottom: 0, left: 2, right: 2 },
        margin: { top: 0, bottom: 1 },
        borderStyle: 'classic',
        borderColor: 'gray'
    }));
}

function executeBankr(args, showOutput = true) {
    try {
        if (showOutput) log(theme.dim(`\n> executing protocol: bankr ${args}`));

        // Execute and capture output if we need to format it, otherwise inherit for interactivity
        execSync(`bankr ${args}`, { stdio: 'inherit' });

    } catch (error) {
        // bankr CLI might exit with non-zero if user cancels or errors, handle gracefully
        // log(theme.secondary('\nâœ– Signal Lost.')); 
    }
}

// --- MENUS ---

async function handleLogin() {
    displayBanner();
    log(theme.primary('AUTHENTICATION GATEWAY'));

    const { loginType } = await inquirer.prompt([
        {
            type: 'list',
            name: 'loginType',
            message: 'Select Protocol:',
            choices: [
                'Interactive Login (Standard)',
                'Email Authentication (Secure)',
                'API Key Injection',
                new inquirer.Separator(),
                theme.secondary('Cannot Connect / Back')
            ]
        }
    ]);

    if (loginType.includes('Back')) return;

    if (loginType.includes('Standard')) {
        executeBankr('login');
    } else if (loginType.includes('Email')) {
        const { email } = await inquirer.prompt([{ type: 'input', name: 'email', message: theme.primary('Enter Email Identity:') }]);
        executeBankr(`login email ${email}`);
    } else if (loginType.includes('API Key')) {
        const { apiKey } = await inquirer.prompt([{ type: 'password', name: 'apiKey', message: theme.primary('Inject API Key:') }]);
        executeBankr(`login --api-key ${apiKey}`);
    }
}

async function handlePrompt() {
    displayBanner();

    const { promptMode } = await inquirer.prompt([
        {
            type: 'list',
            name: 'promptMode',
            message: 'Select Neural Interface:',
            choices: [
                'Quick Query (Single Shot)',
                'Neural Link (Interactive Chat)',
                new inquirer.Separator(),
                theme.secondary('Terminate Link / Back')
            ]
        }
    ]);

    if (promptMode.includes('Back')) return;

    if (promptMode.includes('Quick')) {
        const { query } = await inquirer.prompt([{
            type: 'input',
            name: 'query',
            message: theme.primary('Input Directive:')
        }]);

        const spinner = ora(theme.primary('Processing Directive...')).start();
        try {
            // We want to capture output here ideally, but for now lets stick to inherit to keep it simple and safe
            spinner.stop();
            log(boxen(theme.dim('Processing...'), { borderStyle: 'round', borderColor: 'gray' }));
            executeBankr(`"${query}"`);
        } catch (e) {
            spinner.fail(theme.secondary('Directive Failed'));
        }

        await inquirer.prompt([{ type: 'input', name: 'cont', message: theme.dim('Press Enter to acknowledge...') }]);

    } else {
        // Chat Loop
        console.clear();
        log(boxen(theme.primary(' NEURAL LINK ESTABLISHED '), { borderColor: 'cyan', borderStyle: 'double' }));
        log(theme.dim('Type "exit" to sever connection.\n'));

        let running = true;
        while (running) {
            const { query } = await inquirer.prompt([{
                type: 'input',
                name: 'query',
                prefix: theme.secondary('USER >'),
                message: ' '
            }]);

            if (query.toLowerCase() === 'exit') {
                running = false;
                break;
            }

            log(theme.dim('Thinking...'));
            // Use continue flag to maintain context if bankr supports it nicely via CLI arguments in this loop
            // Note: 'bankr prompt --continue' might be stateful per run or persist in a session file. 
            // Assuming we just want to send prompts.
            executeBankr(`prompt --continue "${query}"`);
            log(' '); // Spacer
        }
    }
}

async function main() {
    await systemStartup();

    while (true) {
        await displayBanner();

        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: theme.text('Select Module:'),
                pageSize: 10,
                choices: [
                    { name: '  ' + theme.primary('âš¡  Neural Interface (Prompt)'), value: 'New Prompt' },
                    { name: '  ' + theme.primary('ðŸ”‘  Access Control (Login)'), value: 'Login / Auth' },
                    { name: '  ' + theme.primary('ðŸ“Š  System Status (Whoami)'), value: 'Check Status (Whoami)' },
                    { name: '  ' + theme.primary('âš™ï¸   Configuration'), value: 'Configuration' },
                    new inquirer.Separator(),
                    { name: '  ' + theme.secondary('âŒ  Sever Connection (Exit)'), value: 'Exit' }
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
                log(theme.dim('--- SYSTEM DIAGNOSTIC ---'));
                executeBankr('whoami');
                await inquirer.prompt([{ type: 'input', name: 'cont', message: theme.dim('Press Enter to continue...') }]);
                break;
            case 'Configuration':
                log(theme.dim('--- SYSTEM CONFIG ---'));
                executeBankr('config get');
                await inquirer.prompt([{ type: 'input', name: 'cont', message: theme.dim('Press Enter to continue...') }]);
                break;
            case 'Exit':
                log(theme.primary('\nMOLTNKR session terminated.'));
                log(theme.dim('Have a productive cycle.'));
                process.exit(0);
        }
    }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
    log(theme.secondary('\n\nForced Disconnect.'));
    process.exit(0);
});

main().catch(err => {
    console.error(err);
    process.exit(1);
});

