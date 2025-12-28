import path from 'path';
import { watch } from 'fs';

console.log('Watching for changes...');
const lastSpawnSignal = new AbortController();
watch(path.resolve(__dirname), { recursive: true }, async (eventType, filename) => {
    if (filename?.includes('dist')) return;
    console.log('Changes detected. Rebuilding...');

    // lastSpawnSignal.abort();
    const b = Bun.spawn(['bun', 'run', 'build', '--no-tailwind'],
        { cwd: __dirname, stdout: 'inherit', stderr: 'inherit', signal: lastSpawnSignal.signal }
    );
    if (b.exitCode !== 0 && b.signalCode !== null) {
        console.error('Build failed.');
        return;
    }
    console.log('Rebuild complete. Watching for changes...');
});

Bun.spawn(['bun', 'run', 'build'], { cwd: __dirname, stdout: 'inherit', stderr: 'inherit', signal: lastSpawnSignal.signal });

Bun.spawn(
    [
        'bun',
        'tailwindcss',
        '-i',
        path.resolve(__dirname, 'tailwind.css'),
        '-o',
        path.resolve(__dirname, 'dist/out.css'),
        '--minify',
        '--watch',
    ],
    { cwd: __dirname, stdout: 'ignore', stderr: 'ignore' },
);

Bun.spawn(
    ['bun', 'preview'],
    { cwd: __dirname, stdout: 'inherit', stderr: 'inherit' },
);
