# Port Mapping — Wikolabs VM
> VM IP : 187.124.167.18
> Usage : configuration DNS / reverse proxy Hostinger

---

## Site principal

| Projet        | GitHub repo              | Déploiement VM        | Domaine            |
|---------------|--------------------------|-----------------------|--------------------|
| wikolabs.com  | Wikolabs/wikolabs        | ~/wikolabs (make prod) | wikolabs.com      |

---

## Projets Flagship — affichés sur wikolabs.com (section démos)

Ces 6 projets apparaissent comme cartes dans la section flagship de wikolabs.com.
Les 3 premiers pointent directement sur l'app démo ; les 3 suivants pointent sur leur LP.

| Projet        | GitHub repo (LP)       | Port LP | GitHub repo (App)        | Port App | URL carte wikolabs.com     |
|---------------|------------------------|---------|--------------------------|----------|----------------------------|
| Botsika.com   | —                      | —       | Wikolabs/botsika         | 3049     | http://187.124.167.18:3049 |
| Karohy.mg     | —                      | —       | Wikolabs/karohy          | 3050     | http://187.124.167.18:3050 |
| BI Wikolabs   | —                      | —       | Wikolabs/bi-wikolabs     | 3051     | http://187.124.167.18:3051 |
| MediWyz       | —                      | —       | (propre infrastructure)  | —        | https://mediwyz.com        |
| okaiz.com     | Wikolabs/okaiz         | 3052    | Wikolabs/okaiz-app       | 3055     | http://187.124.167.18:3052 |
| Piskid.com    | Wikolabs/piskid        | 3053    | Wikolabs/piskid-app      | 3056     | http://187.124.167.18:3053 |
| wefreep.com   | Wikolabs/wefreep       | 3054    | Wikolabs/wefreep-app     | 3057     | http://187.124.167.18:3054 |

---

## Landing Pages des Offers (wikolabs-offers) — ports 3001–3031

Ces LPs sont déployées via GitHub Actions (build CI + SSH deploy). Elles présentent chaque offre.

| Projet        | GitHub repo                          | Port VM | URL directe                         |
|---------------|--------------------------------------|---------|-------------------------------------|
| pulsescope    | Wikolabs/pulsescope                  | 3001    | http://187.124.167.18:3001          |
| leadforge     | Wikolabs/leadforge                   | 3002    | http://187.124.167.18:3002          |
| reachwave     | Wikolabs/reachwave                   | 3003    | http://187.124.167.18:3003          |
| scoreflow     | Wikolabs/scoreflow                   | 3004    | http://187.124.167.18:3004          |
| booklync      | Wikolabs/booklync                    | 3005    | http://187.124.167.18:3005          |
| propgenai     | Wikolabs/propgenai                   | 3006    | http://187.124.167.18:3006          |
| retainiq      | Wikolabs/retainiq                    | 3007    | http://187.124.167.18:3007          |
| helpiqai      | Wikolabs/helpiqai                    | 3008    | http://187.124.167.18:3008          |
| triageiq      | Wikolabs/triageiq                    | 3009    | http://187.124.167.18:3009          |
| onboardai     | Wikolabs/onboardai                   | 3010    | http://187.124.167.18:3010          |
| callnotes     | Wikolabs/callnotes                   | 3011    | http://187.124.167.18:3011          |
| datavoice     | Wikolabs/datavoice                   | 3012    | http://187.124.167.18:3012          |
| reportly      | Wikolabs/reportly                    | 3013    | http://187.124.167.18:3013          |
| forecastiq    | Wikolabs/forecastiq                  | 3014    | http://187.124.167.18:3014          |
| nexuscrm      | Wikolabs/nexuscrm                    | 3015    | http://187.124.167.18:3015          |
| semantiq      | Wikolabs/semantiq                    | 3016    | http://187.124.167.18:3016          |
| personaai     | Wikolabs/personaai                   | 3017    | http://187.124.167.18:3017          |
| datastream    | Wikolabs/datastream                  | 3018    | http://187.124.167.18:3018          |
| modelops      | Wikolabs/modelops                    | 3019    | http://187.124.167.18:3019          |
| docextract    | Wikolabs/docextract                  | 3020    | http://187.124.167.18:3020          |
| detectvision  | Wikolabs/detectvision                | 3021    | http://187.124.167.18:3021          |
| bimflow       | Wikolabs/bimflow                     | 3022    | http://187.124.167.18:3022          |
| geomapai      | Wikolabs/geomapai                    | 3023    | http://187.124.167.18:3023          |
| uxforge       | Wikolabs/uxforge                     | 3024    | http://187.124.167.18:3024          |
| appcraft      | Wikolabs/appcraft                    | 3025    | http://187.124.167.18:3025          |
| perfoptiq     | Wikolabs/perfoptiq                   | 3026    | http://187.124.167.18:3026          |
| seowave       | Wikolabs/seowave                     | 3027    | http://187.124.167.18:3027          |
| edgeai        | Wikolabs/edgeai                      | 3028    | http://187.124.167.18:3028          |
| iotwatch      | Wikolabs/iotwatch                    | 3029    | http://187.124.167.18:3029          |
| visioncam     | Wikolabs/visioncam                   | 3030    | http://187.124.167.18:3030          |
| maintainiq    | Wikolabs/maintainiq                  | 3031    | http://187.124.167.18:3031          |

---

## Plages réservées — Prochains projets

| Plage      | Usage prévu                                      |
|------------|--------------------------------------------------|
| 3032–3048  | Réservé — prochaines LP flagship ou demo apps    |

---

## Projets Cloud Run GPU (GCP — atr.guillaume@gmail.com)

| Projet        | GitHub repo                          | Cloud Run service                   | Note                               |
|---------------|--------------------------------------|-------------------------------------|------------------------------------|
| imagegen      | Wikolabs/imagegen                    | imagegen.wikolabs.com               | Stable Diffusion XL / FLUX.1       |
| medicaliqa    | Wikolabs/medicaliqa                  | medicaliqa.wikolabs.com             | ViT — Analyse imagerie médicale    |
| graphfraud    | Wikolabs/graphfraud                  | graphfraud.wikolabs.com             | GNN (PyG) + Neo4j                  |
| pricingrl     | Wikolabs/pricingrl                   | pricingrl.wikolabs.com              | RL (PPO) — Tarification dynamique  |
| finetunedlm   | Wikolabs/finetunedlm                 | finetunedlm.wikolabs.com            | LoRA/QLoRA fine-tuning LLM         |
| voicetranslate| Wikolabs/voicetranslate              | voicetranslate.wikolabs.com         | Whisper large-v3 + NLLB-200        |

---

## Projets avec domaine propre

| Projet        | Domaine                    | Port VM | Note                                     |
|---------------|----------------------------|---------|------------------------------------------|
| productsearch | productsearch.wikolabs.com | 3049    | Rebrandé en Botsika.com                  |
| prestasearch  | prestasearch.wikolabs.com  | 3050    | Rebrandé en Karohy.mg                    |
| bi-wikolabs   | bi.wikolabs.com            | 3051    | Agent BI en langage naturel              |
| mediwyz       | mediwyz.com                | —       | Infrastructure propre (multi-pays)       |
| okaiz.com     | okaiz.com (à configurer)   | 3052    | LP + 3055 pour la démo                  |
| piskid.com    | piskid.com (à configurer)  | 3053    | LP + 3056 pour la démo                  |
| wefreep.com   | wefreep.com (à configurer) | 3054    | LP + 3057 pour la démo                  |

---

## Configuration Hostinger — étapes
1. DNS → ajouter un enregistrement **A** pour chaque sous-domaine → `187.124.167.18`
2. Sur la VM : configurer nginx pour router chaque sous-domaine vers le bon port
3. Certbot : générer les certificats SSL pour chaque sous-domaine
