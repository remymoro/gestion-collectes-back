# Gestion Collectes API

API NestJS sécurisée pour la gestion des collectes alimentaires.

## Fonctionnalités principales

- Authentification JWT sécurisée (cookie HttpOnly/Secure/SameSite strict)
- Gestion des utilisateurs, rôles (`admin`, `centre`, `benevole`)
- Association d’un utilisateur à un centre
- Gestion des centres, magasins, collectes, produits, bénévoles, planning
- Endpoints `/auth/me` (vérification de session) et `/auth/logout` (déconnexion)
- Gestion d’erreur centralisée et sécurisée (codes HTTP, messages génériques)
- Documentation Swagger complète (`/api`)
- CORS restrictif pour le front Angular

## Sécurité

- JWT stocké côté serveur dans un cookie HttpOnly/Secure (pas de localStorage)
- Toutes les routes sensibles protégées par guards et rôles
- Préparation à la protection CSRF (middleware prêt, désactivé en dev)
- HTTPS obligatoire en production
- Limitation des origines CORS à l’application front

## Pour le front-end

- Utiliser `{ withCredentials: true }` sur toutes les requêtes API nécessitant une authentification
- Vérifier la session avec `/auth/me`
- Se déconnecter avec `/auth/logout`
- Les rôles sont disponibles dans `/auth/me` pour adapter l’interface

## Démarrage

1. Copier `.env.example` en `.env` et configurer la base de données
2. Installer les dépendances :  
   `npm install`
3. Lancer le serveur :  
   `npm run start:dev`
4. Accéder à la documentation Swagger sur `/api`

---

**Pour toute question sur la sécurité, la gestion des centres ou l’intégration front, voir la documentation ou