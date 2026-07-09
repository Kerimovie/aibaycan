// Cross-platform dev launcher.
// Windows-da pnpm skriptləri cmd üzərindən qaçır → POSIX `${PORT:-7301}` genişlənmir.
// Bu launcher həm default portu (7301, decision #017) təyin edir, həm də
// `PORT` env override-ını saxlayır (E2E web-i 3100-də qaldırmaq üçün bundan asılıdır —
// bax e2e/playwright.config.ts).
import { spawn } from 'node:child_process';

const port = process.env.PORT || '7301';

const child = spawn('next', ['dev', '--port', port], {
  stdio: 'inherit',
  shell: true, // Windows-da `next` → `next.cmd` həlli üçün
});

child.on('exit', (code) => process.exit(code ?? 0));
