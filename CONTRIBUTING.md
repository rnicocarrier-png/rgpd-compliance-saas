## Checklist PR — rgpd-compliance-saas

Avant d'ouvrir une Pull Request, merci de vérifier :

- ✅ **Tests locaux & lint**
  - Exécutez `npm run lint:css` (nécessite `stylelint`; si absent, utilisez `npx stylelint ...`).
  - Vérifiez l'UI et les pages critiques en `npm run dev`.

- ✅ **Modifications de base de données**
  - Si vous modifiez `prisma/schema.prisma`, **documentez** le changement dans la PR et **exécutez** :
    - `npm run db:push`
  - Indiquez si la modification nécessite une action manuelle sur la base de production.

- ✅ **Secrets & env**
  - N'ajoutez jamais de secrets (`.env`, `.env.local`) au dépôt. Si la PR nécessite une variable d'environnement, documentez-la dans la description et utilisez un placeholder.

- ✅ **Conventions et revues**
  - Respectez la structure multi-tenant (toutes les entités principales ont un `companyId`).
  - Vérifiez que les requêtes Prisma filtrent par `companyId` quand nécessaire.

- ✅ **Dev tools recommandés**
  - Installez l'extension VS Code `Tailwind CSS IntelliSense` pour l'autocomplétion.
  - Si vous utilisez Stylelint dans CI, assurez-vous qu'il charge `.stylelintrc.json`.

Merci — une PR claire et vérifiée accélère les revues et les merges. 🙏
