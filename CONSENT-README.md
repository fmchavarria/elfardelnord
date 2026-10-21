# Consent Mode v2 — guía de integración

Implementación de preferencias para catalán, español e inglés; predeterminado denegado para `analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization`. Las categorías necesarias permanecen activas. Las preferencias se almacenan en localStorage y pueden revisarse desde el pie.

**Importante:** este proyecto NO carga Google Analytics / Ads ni Tag Manager, porque faltan los identificadores reales. En modo básico, ninguna etiqueta de análisis o marketing se debe cargar antes de consentimiento. Para conectar GA4 o GTM, implementar un cargador condicional en `assets/js/consent.js` que cargue las etiquetas solo tras consentimiento, y comprobar que cada etiqueta respeta su categoría; para instalaciones con GTM es recomendable una CMP certificada por Google según el caso. No insertar snippets sin protección en el HTML.

Verificar con Google Tag Assistant, navegador limpio y panel de red: ningún tracker opcional antes de aceptar, funcionamiento de rechazo, aceptaciones parciales, cambio posterior y traducciones. Las preferencias actuales se guardan localmente por navegador, no se comparten entre dominios.

El texto es informativo provisional: antes de publicar hace falta redactar política de privacidad/cookies completa, responsable, finalidades, proveedores, caducidades y mecanismo de retirada, y revisar adecuación RGPD/LSSI. Consent Mode no sustituye una plataforma de gestión de consentimiento cuando esta sea exigible.
