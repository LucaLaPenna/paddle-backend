# paddle-backend

Laravel 13 backend project.

## Requirements

- PHP 8.3+
- Composer 2+
- Node.js 20+ and npm
- Optional: Docker Desktop if you want to run the app with Laravel Sail

## Quick Start

1. Install PHP and JavaScript dependencies:

```bash
composer install
npm install
```

2. Create your environment file and app key:

```bash
cp .env.example .env
php artisan key:generate
```

3. Use the default SQLite database that ships with the project:

```bash
php artisan migrate
```

4. Start the backend server:

```bash
php artisan serve
```

5. In a second terminal, start Vite for frontend assets:

```bash
npm run dev
```

The app will usually be available at `http://127.0.0.1:8000`.

## One-Command Setup

If you want the fastest first-time setup, run:

```bash
composer setup
```

That command will:

- install Composer dependencies
- create `.env` if needed
- generate the application key
- run database migrations
- install npm dependencies
- build frontend assets

After that, start the app with:

```bash
php artisan serve
npm run dev
```

## Run With Laravel Sail

Sail is included as a development dependency, but you still need to initialize its Docker files the first time.

1. Make sure Docker Desktop is running.

2. Generate the Sail configuration:

```bash
php artisan sail:install --with=mysql,redis,mailpit
```

3. Start the containers:

```bash
./vendor/bin/sail up -d
```

4. Run migrations inside the container:

```bash
./vendor/bin/sail artisan migrate
```

5. Start the Vite dev server inside Sail if needed:

```bash
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

For all other Laravel commands, use Sail when the containers are running:

```bash
./vendor/bin/sail artisan test
./vendor/bin/sail artisan make:controller ExampleController
```

## Useful Commands

```bash
php artisan test
php artisan migrate:fresh --seed
php artisan queue:listen
php artisan pail
```

If you are using Sail, prefix those commands with `./vendor/bin/sail`.
