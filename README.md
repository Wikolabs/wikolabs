# Wikolabs

## Start the project locally

To start the project locally, you should have Docker installed on your machine.

### 1. Copy and edit your env file

```bash
cp .env.example .env
```

| Variable | Description | Default |
|---|---|---|
| `NAMESPACE` | Project namespace (used for container names and DB) | `wikolabs` |
| `APP_ENV` | Environment (`development` / `staging` / `production`) | `development` |
| `DB_PASSWORD` | MariaDB user password | `password` |
| `DB_ROOT_PASSWORD` | MariaDB root password | `password` |
| `ADMIN_SETUP_KEY` | Secret key to initialize the admin panel DB | `change-me-in-production` |

### 2. Install dependencies

```bash
bun install
```

### 3. Start the project

```bash
make start-f
```

This starts the Next.js app on `http://localhost:3000` and MariaDB on port `3306`.

To show all available Makefile commands, just run `make` in the root of the project.

### 4. Initialize the admin panel database

Run this **once** after the first start (wait for the DB healthcheck to pass):

```bash
curl -X POST http://localhost:3000/api/admin/setup \
  -H "Content-Type: application/json" \
  -d '{
    "setup_key": "change-me-in-production",
    "username": "admin",
    "password": "your-secure-password"
  }'
```

This creates the required tables (`site_content`, `admin_users`, `admin_sessions`) and your admin account.

### 5. Access the admin panel

Go to `http://localhost:3000/admin` and log in with the credentials you set above.

From there you can edit all landing page sections: hero, problems/solutions, roles, pricing, process, testimonials, and FAQ. Changes are saved to MariaDB and reflected on the landing page immediately.

## Troubleshooting

### DB access denied

If you see `Access denied for user 'wikolabs'@...`, the DB user may not exist yet (happens when the MariaDB volume was initialized with a different `NAMESPACE`). Fix it manually:

```bash
docker exec -it wikolabs_db mariadb -u root -ppassword -e "
  CREATE DATABASE IF NOT EXISTS wikolabs_db;
  CREATE USER IF NOT EXISTS 'wikolabs'@'%' IDENTIFIED BY 'password';
  GRANT ALL PRIVILEGES ON wikolabs_db.* TO 'wikolabs'@'%';
  FLUSH PRIVILEGES;
"
```

Then retry the setup curl command from step 4.

### Nuclear reset

To wipe everything and start fresh:

```bash
make stop
docker volume rm docker_wikolabs_mariadb_data
make start-f
```

Then re-run the setup curl from step 4.
