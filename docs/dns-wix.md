# Registros DNS actuales de vittoriachess.com (Wix)

Inventario tomado de las capturas del panel de Wix el 30/09/2026. Es la referencia para el Paso 2 del traspaso del dominio (copiar registros a Cloudflare antes de cambiar los servidores de nombres).

IMPORTANTE: en las capturas varios valores aparecen cortados ("…"). Antes del Paso 2 hay que abrir cada registro en Wix (menú "···" → Editar) y copiar el valor completo.

## Se copian a Cloudflare tal cual (correo Google Workspace)

| Tipo | Host | Valor | Prioridad | Estado |
| --- | --- | --- | --- | --- |
| MX | vittoriachess.com | aspmx.l.google.com | 10 | Copiar |
| MX | vittoriachess.com | alt1.aspmx.l.google.com | 20 | Copiar |
| MX | vittoriachess.com | alt2.aspmx.l.google.com | 30 | Copiar |
| MX | vittoriachess.com | alt3.aspmx.l.google.com | 40 | Copiar |
| MX | vittoriachess.com | alt4.aspmx.l.google.com | 50 | Copiar |
| TXT | vittoriachess.com | v=spf1 include:_spf.google.com … (valor completo en Wix) | — | Copiar |
| TXT | vittoriachess.com | google-site-verification=… (valor completo en Wix) | — | Copiar |
| TXT | _dmarc | v=DMARC1; p=none; rua=… (valor completo en Wix) | — | Copiar |
| TXT | google._domainkey | v=DKIM1; k=rsa; p=MIIBIjA… (registro 1, valor completo en Wix) | — | Revisar |
| TXT | google._domainkey | v=DKIM1; k=rsa; p=MIIBIjA… (registro 2, valor completo en Wix) | — | Revisar |

Nota DKIM: aparecen dos registros google._domainkey. Normalmente solo hay uno activo. Antes de copiarlos, comprobar en la consola de administración de Google (Aplicaciones → Google Workspace → Gmail → Autenticar correo electrónico) cuál es el valor vigente y copiar solo ese. Si los dos nombres de host son distintos (el final aparece cortado), copiar ambos.

## Se sustituyen por la web nueva (apuntan a Wix)

| Tipo | Host | Valor actual | Qué pasa |
| --- | --- | --- | --- |
| A | vittoriachess.com | 185.230.63.107 | Se elimina; Cloudflare apunta el dominio a la web nueva |
| A | vittoriachess.com | 185.230.63.186 | Se elimina |
| A | vittoriachess.com | 185.230.63.171 | Se elimina |
| CNAME | www | cdn1.wixdns.net | Se sustituye: www redirige a vittoriachess.com |
| CNAME | es | cdn3.wixdns.net | Se sustituye por una redirección a vittoriachess.com (por enlaces antiguos) |
| CNAME | en | cdn3.wixdns.net | Se sustituye por una redirección a vittoriachess.com/en (por enlaces antiguos) |

## Informativo

| Tipo | Valor | Qué pasa |
| --- | --- | --- |
| NS | ns0.wixdns.net, ns1.wixdns.net | Cambian a los dos servidores que indique Cloudflare en el Paso 4 |

Sin registros SRV ni otros MX.
