# paddle-backend

Laravel 13 app using the React starter kit.

Current stack:

- Laravel 13
- React 19
- Inertia.js
- Vite 8
- Tailwind CSS 4
- SQLite by default
- Laravel Sail available as a dev dependency, but not initialized yet

## Requirements

- PHP 8.3+
- Composer 2+
- Node.js 20+ and npm
- Optional: Docker Desktop if you want to run with Sail later

## Quick Start

1. Install dependencies:

```bash
composer install
npm install
```

2. Create the environment file and generate the app key:

```bash
cp .env.example .env
php artisan key:generate
```

3. Use the default SQLite database included in `database/database.sqlite`:

```bash
php artisan migrate
```

4. Start the Laravel server:

```bash
php artisan serve
```

5. In a second terminal, start Vite:

```bash
npm run dev
```

The app will usually be available at `http://127.0.0.1:8000`.

## First-Time Setup Shortcut

For a clean first-time install, you can run:

```bash
composer setup
```

That script will:

- install Composer packages
- create `.env` if it is missing
- generate the application key
- run migrations
- install npm packages
- build frontend assets

After that, start development with:

```bash
php artisan serve
npm run dev
```

## Important Vite Note

This project uses Inertia and React, so the frontend assets must be built or served by Vite.

If you see an error like `Vite manifest not found at public/build/manifest.json`, run one of these:

```bash
npm run dev
```

or:

```bash
npm run build
```

Use `npm run dev` during local development. Use `npm run build` when you want generated assets in `public/build`.

## Optional: Switch To MySQL

The default environment uses SQLite. If you want MySQL instead, update `.env` before migrating:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=paddle_backend
DB_USERNAME=root
DB_PASSWORD=
```

Then run:

```bash
php artisan migrate
```

## Optional: Run With Sail

Sail is installed as a dependency, but this repo does not yet have the generated Docker files.

If you want Sail with MySQL, initialize it with:

```bash
php artisan sail:install --with=mysql,redis,mailpit
```

Then start the containers:

```bash
./vendor/bin/sail up -d
```

Install frontend dependencies and run the app inside Sail:

```bash
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
./vendor/bin/sail artisan migrate
```

If you use Sail, prefer running Laravel commands through it:

```bash
./vendor/bin/sail artisan test
./vendor/bin/sail artisan pail
```

## Useful Commands

```bash
php artisan test
php artisan migrate:fresh --seed
php artisan pail
npm run dev
npm run build
npm run lint:check
npm run types:check
```
