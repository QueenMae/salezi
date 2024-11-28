# Fnac Back Office API  

Ce projet est un back-end développé avec **Strapi** pour gérer les produits et utilisateurs avec des rôles et permissions spécifiques.

## Ce qui a été fait  

1. Configuration de Strapi :  
   - Mise en place d'une base de données SQLite.  
   - Création des collections pour les produits et les transactions.  

2. Gestion des rôles :  
   - Super Admin : Peut tout faire sauf supprimer le compte admin par défaut.  
   - Fnac Manager : Peut voir et modifier tous les produits.  
   - User : Peut uniquement consulter les produits et transactions (permissions `read-only`).  

3. Authentification avec API Tokens :  
   - Configuration de tokens pour les rôles.  
   - Définition des permissions (CRUD) dans le Strapi Admin Panel.  

4. Tests avec Postman :  
   - Vérification des endpoints :  
     - `GET /api/products`  
     - `POST /api/products`  
     - `PUT /api/products/:documentId`  
     - `DELETE /api/products/:documentId`  
   - Validation des restrictions selon les rôles (Super Admin, Fnac Manager, User).  

## Résultats attendus sur Postman  

- Super Admin :  
  - 🔵 GET : ✅  
  - 🟢 POST : ✅  
  - 🟠 PUT : ✅  
  - 🔴 DELETE: ✅  
- Fnac Manager :  
  - 🔵 GET : ✅  
  - 🟢 POST : ✅  
  - 🟠 PUT : ✅  
  - 🔴 DELETE: ❌ (non autorisé).  
- User :  
  - 🔵 GET : ✅  
  - 🟢 POST : ❌ (erreur 403 ou 401).  
  - 🟠 PUT : ❌ (erreur 403 ou 401).  
  - 🔴 DELETE : ❌ (erreur 403 ou 401).  

## Configuration  

- Strapi : Version 5.4.0  

- Outils utilisés :  
  - Postman : Pour tester les endpoints et valider les permissions.  
  - GitHub** : Pour la gestion et le partage du code.  

## Objectifs  

- Implémenter un back-office robuste pour gérer les produits.  
- Respecter les restrictions de permissions pour les rôles définis.  
