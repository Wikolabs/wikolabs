# Port Mapping — Wikolabs VM
> VM IP : 187.124.167.18
> Usage : configuration DNS / reverse proxy Hostinger

---

## Site principal

| Projet        | GitHub repo              | Déploiement VM             | Domaine         |
|---------------|--------------------------|----------------------------|-----------------|
| wikolabs.com  | Wikolabs/wikolabs        | ~/wikolabs (make prod)     | wikolabs.com    |

Containers : `wikolabs_app` (interne) + `wikolabs_nginx` (80/443) + `wikolabs_db` (MySQL 3306)

---

## Projets Flagship — affichés sur wikolabs.com (section démos)

Ces 6 projets apparaissent comme cartes dans la section flagship de wikolabs.com.

| Projet        | GitHub repo              | Port VM | URL carte wikolabs.com      |
|---------------|--------------------------|---------|------------------------------|
| Botsika.com   | Wikolabs/botsika         | 3049    | http://187.124.167.18:3049  |
| Karohy.mg     | Wikolabs/karohy          | 3050    | http://187.124.167.18:3050  |
| BI Wikolabs   | bi-wikolabs-lp (3051)   | bi-wikolabs-app (8000)        | http://187.124.167.18:3051 |
| MediWyz       | —                    | propre infra    | https://mediwyz.com         |
| okaiz.com     | okaiz (3052)         | okaiz-frontend (3055)         | http://187.124.167.18:3052 |
| Piskid.com    | piskid (3053)        | piskid-frontend (3056)        | http://187.124.167.18:3053 |
| wefreep.com   | wefreep (3054)       | firipy-frontend (3057)        | http://187.124.167.18:3054 |

---

## Landing Pages des Offers (wikolabs-offers) — ports 3001–3031

| Projet        | GitHub repo           | Port VM | Container        |
|---------------|-----------------------|---------|------------------|
| pulsescope    | Wikolabs/pulsescope   | 3001    | pulsescope       |
| leadforge     | Wikolabs/leadforge    | 3002    | leadforge        |
| reachwave     | Wikolabs/reachwave    | 3003    | reachwave        |
| scoreflow     | Wikolabs/scoreflow    | 3004    | scoreflow        |
| booklync      | Wikolabs/booklync     | 3005    | booklync         |
| propgenai     | Wikolabs/propgenai    | 3006    | propgenai        |
| retainiq      | Wikolabs/retainiq     | 3007    | retainiq         |
| helpiqai      | Wikolabs/helpiqai     | 3008    | helpiqai         |
| triageiq      | Wikolabs/triageiq     | 3009    | triageiq         |
| onboardai     | Wikolabs/onboardai    | 3010    | onboardai        |
| callnotes     | Wikolabs/callnotes    | 3011    | callnotes        |
| datavoice     | Wikolabs/datavoice    | 3012    | datavoice        |
| reportly      | Wikolabs/reportly     | 3013    | reportly         |
| forecastiq    | Wikolabs/forecastiq   | 3014    | forecastiq       |
| nexuscrm      | Wikolabs/nexuscrm     | 3015    | nexuscrm         |
| semantiq      | Wikolabs/semantiq     | 3016    | semantiq         |
| personaai     | Wikolabs/personaai    | 3017    | personaai        |
| datastream    | Wikolabs/datastream   | 3018    | datastream       |
| modelops      | Wikolabs/modelops     | 3019    | modelops         |
| docextract    | Wikolabs/docextract   | 3020    | docextract       |
| detectvision  | Wikolabs/detectvision | 3021    | detectvision     |
| bimflow       | Wikolabs/bimflow      | 3022    | bimflow          |
| geomapai      | Wikolabs/geomapai     | 3023    | geomapai         |
| uxforge       | Wikolabs/uxforge      | 3024    | uxforge          |
| appcraft      | Wikolabs/appcraft     | 3025    | appcraft         |
| perfoptiq     | Wikolabs/perfoptiq    | 3026    | perfoptiq        |
| seowave       | Wikolabs/seowave      | 3027    | seowave          |
| edgeai        | Wikolabs/edgeai       | 3028    | edgeai           |
| iotwatch      | Wikolabs/iotwatch     | 3029    | iotwatch         |
| visioncam     | Wikolabs/visioncam    | 3030    | visioncam        |
| maintainiq    | Wikolabs/maintainiq   | 3031    | maintainiq       |

---

## Repos unifiés Botsika / Karohy — port 3049–3050 (docker-compose 3 services)

| Projet      | Container        | Port VM | Note                              |
|-------------|------------------|---------|-----------------------------------|
| Botsika.com | botsika          | 3049    | Next.js LP + ChatInterface intégrée |
|             | botsika-backend  | interne | FastAPI + pgvector                |
|             | botsika-db       | interne | PostgreSQL pgvector               |
| Karohy.mg   | karohy           | 3050    | Next.js LP + ChatInterface intégrée |
|             | karohy-backend   | interne | FastAPI + pgvector                |
|             | karohy-db        | interne | PostgreSQL pgvector               |

---

## Autres apps déployées — ports 3034–3044

| Projet           | Container        | Port VM |
|------------------|------------------|---------|
| fraudguard       | fraudguard       | 3034    |
| churnpredict     | churnpredict     | 3035    |
| ragai            | ragai            | 3036    |
| recsys           | recsys           | 3037    |
| sentimentlive    | sentimentlive    | 3038    |
| agentflow        | agentflow        | 3039    |
| causalai         | causalai         | 3040    |
| entityresolution | entityresolution | 3041    |
| imagegen         | imagegen         | 3042    |
| medicaliqa       | medicaliqa       | 3043    |
| graphfraud       | graphfraud       | 3044    |

---

## BI Wikolabs — port 3051 (LP) + 8000 (app)

| Container              | Port VM | Note                        |
|------------------------|---------|-----------------------------|
| bi-wikolabs-lp         | 3051    | Landing page Next.js        |
| bi-wikolabs-app-1      | 8000    | FastAPI / Chainlit backend  |
| bi-wikolabs-postgres-1 | interne | PostgreSQL                  |
| bi-wikolabs-mongo-1    | interne | MongoDB                     |

---


## Flagship LP + App — okaiz / piskid / wefreep — ports 3052–3057

| Projet      | Container       | Port VM | Note                        |
|-------------|-----------------|---------|------------------------------|
| okaiz.com   | okaiz           | 3052    | LP Next.js (Wikolabs/okaiz) |
|             | okaiz-frontend  | 3055    | React demo app               |
|             | okaiz-backend   | interne | FastAPI + pgvector           |
|             | okaiz-db        | interne | PostgreSQL                  |
| piskid.com  | piskid          | 3053    | LP Next.js (Wikolabs/piskid)|
|             | piskid-frontend | 3056    | React demo app               |
|             | piskid-backend  | interne | FastAPI (Groq only)          |
| wefreep.com | wefreep         | 3054    | LP Next.js (Wikolabs/wefreep)|
|             | firipy-frontend | 3057    | React demo app               |
|             | firipy-backend  | interne | FastAPI + pgvector           |
|             | firipy-db       | interne | PostgreSQL                  |

---

## Configuration Hostinger — étapes
1. DNS → ajouter un enregistrement **A** pour chaque sous-domaine → `187.124.167.18`
2. Sur la VM : configurer nginx pour router chaque sous-domaine vers le bon port
3. Certbot : générer les certificats SSL pour chaque sous-domaine
