# Port Mapping — Wikolabs Offers
> VM IP : 187.124.167.18
> Usage : configuration DNS / reverse proxy Hostinger

| Projet        | Sous-domaine suggéré              | Port VM | URL directe                        |
|---------------|-----------------------------------|---------|------------------------------------|
| pulsescope    | pulsescope.wikolabs.com           | 3001    | http://187.124.167.18:3001         |
| leadforge     | leadforge.wikolabs.com            | 3002    | http://187.124.167.18:3002         |
| reachwave     | reachwave.wikolabs.com            | 3003    | http://187.124.167.18:3003         |
| scoreflow     | scoreflow.wikolabs.com            | 3004    | http://187.124.167.18:3004         |
| booklync      | booklync.wikolabs.com             | 3005    | http://187.124.167.18:3005         |
| propgenai     | propgenai.wikolabs.com            | 3006    | http://187.124.167.18:3006         |
| retainiq      | retainiq.wikolabs.com             | 3007    | http://187.124.167.18:3007         |
| helpiqai      | helpiqai.wikolabs.com             | 3008    | http://187.124.167.18:3008         |
| triageiq      | triageiq.wikolabs.com             | 3009    | http://187.124.167.18:3009         |
| onboardai     | onboardai.wikolabs.com            | 3010    | http://187.124.167.18:3010         |
| callnotes     | callnotes.wikolabs.com            | 3011    | http://187.124.167.18:3011         |
| datavoice     | datavoice.wikolabs.com            | 3012    | http://187.124.167.18:3012         |
| reportly      | reportly.wikolabs.com             | 3013    | http://187.124.167.18:3013         |
| forecastiq    | forecastiq.wikolabs.com           | 3014    | http://187.124.167.18:3014         |
| nexuscrm      | nexuscrm.wikolabs.com             | 3015    | http://187.124.167.18:3015         |
| semantiq      | semantiq.wikolabs.com             | 3016    | http://187.124.167.18:3016         |
| personaai     | personaai.wikolabs.com            | 3017    | http://187.124.167.18:3017         |
| datastream    | datastream.wikolabs.com           | 3018    | http://187.124.167.18:3018         |
| modelops      | modelops.wikolabs.com             | 3019    | http://187.124.167.18:3019         |
| docextract    | docextract.wikolabs.com           | 3020    | http://187.124.167.18:3020         |
| detectvision  | detectvision.wikolabs.com         | 3021    | http://187.124.167.18:3021         |
| bimflow       | bimflow.wikolabs.com              | 3022    | http://187.124.167.18:3022         |
| geomapai      | geomapai.wikolabs.com             | 3023    | http://187.124.167.18:3023         |
| uxforge       | uxforge.wikolabs.com              | 3024    | http://187.124.167.18:3024         |
| appcraft      | appcraft.wikolabs.com             | 3025    | http://187.124.167.18:3025         |
| perfoptiq     | perfoptiq.wikolabs.com            | 3026    | http://187.124.167.18:3026         |
| seowave       | seowave.wikolabs.com              | 3027    | http://187.124.167.18:3027         |
| edgeai        | edgeai.wikolabs.com               | 3028    | http://187.124.167.18:3028         |
| iotwatch      | iotwatch.wikolabs.com             | 3029    | http://187.124.167.18:3029         |
| visioncam     | visioncam.wikolabs.com            | 3030    | http://187.124.167.18:3030         |
| maintainiq    | maintainiq.wikolabs.com           | 3031    | http://187.124.167.18:3031         |

## Projets avec domaine propre (déjà configurés)
| Projet        | Domaine                           |
|---------------|-----------------------------------|
| productsearch | productsearch.wikolabs.com        |
| prestasearch  | prestasearch.wikolabs.com         |
| bi-wikolabs   | bi.wikolabs.com                   |
| mediwyz       | mediwyz.com                       |

## Configuration Hostinger — étapes
1. DNS → ajouter un enregistrement **A** pour chaque sous-domaine → `187.124.167.18`
2. Sur la VM : configurer nginx pour router chaque sous-domaine vers le bon port
3. Certbot : générer les certificats SSL pour chaque sous-domaine
