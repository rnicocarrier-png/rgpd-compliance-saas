# rgpd-compliance-saas
SaaS de conformité RGPD pour PME

## Configuration recommandée pour le développement 🛠️

- **Extension VS Code recommandée** : Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`) — autocomplétion et reconnaissance des at-rules.
- **Réglages VS Code utiles** : ajouter `.vscode/settings.json` avec `"css.lint.unknownAtRules": "ignore"` (et équivalents pour `scss`/`less`).
- **Si vous utilisez Stylelint** : ajoutez `.stylelintrc.json` et autorisez les at-rules `tailwind`, `apply`, `variants`, `responsive`, `screen`.
- **Sécurité** : ne commitez jamais vos fichiers `.env` (déjà dans `.gitignore`).
