# Laravel + NestJS API Project Setup

## Laravel API Setup

```bash
# Clone your Laravel repo
git clone <your-laravel-repo-url> laravel-api
cd laravel-api

# Install PHP dependencies
composer install

# Copy .env and generate app key
cp .env.example .env
php artisan key:generate

# Configure your .env database settings before migrating

# Run migrations and seed sample products
php artisan migrate
php artisan db:seed --class=ProductsTableSeeder

# Run Laravel server (default on port 8000)
php artisan serve


Check Laravel API products endpoint:

http://127.0.0.1:8000/api/products

# NestJS App Setup

# Clone your NestJS repo
git clone <your-nestjs-repo-url> nestjs-app
cd nestjs-app

# Install Node dependencies
npm install

# Run NestJS server (default on port 3000)
npm run start:dev

Access your NestJS API

http://localhost:3000/products
