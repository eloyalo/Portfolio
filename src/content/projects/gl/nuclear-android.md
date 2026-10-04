---
title: Nuclear para Android
summary: Port a Android do reprodutor de música de código aberto Nuclear, que só existía para escritorio, adaptado e optimizado para o móbil.
year: 2026
role: Proxecto persoal
sector: Código aberto
stack: [TypeScript, React, Rust, Tauri, Android]
order: 1
repo: https://github.com/eloyalo/nuclear-android
screenshots:
  - src: ../../../assets/projects/nuclear-android/queue.png
    alt: Reproducindo un álbum coa cola aberta
  - src: ../../../assets/projects/nuclear-android/notification.png
    alt: Controis de reprodución en segundo plano
  - src: ../../../assets/projects/nuclear-android/album.png
    alt: Páxina dun álbum
---

## O punto de partida

[Nuclear](https://github.com/nukeop/nuclear) é un reprodutor de música libre, sen anuncios nin rastrexo, feito con Tauri: TypeScript e React na interface, Rust por debaixo. Só había versións para Windows, macOS e Linux. Porteino a Android como fork non oficial, e non me limitei a meter a versión de escritorio nunha pantalla pequena.

## Que fixen

- **Que arrancase en Android.** Separei do build móbil as integracións que só teñen sentido en escritorio e cambiei como se crean as conexións HTTPS: en Android, a verificación de certificados por defecto deixaba colgada calquera petición.
- **YouTube sen yt-dlp.** Android non pode executar binarios descargados, así que a busca e os streams pasan por [rustypipe](https://codeberg.org/ThetaDev/rustypipe) e a API do reprodutor de YouTube. Se Google limita as peticións, a app agarda en vez de reintentar en bucle.
- **Interface pensada para o móbil.** Deseño compacto por debaixo de 640 px, coa navegación e a cola en paneis laterais, táboas lexibles sen hover, botón atrás de Android e marxes do sistema.
- **Reprodución en segundo plano**, con notificación e controis na pantalla de bloqueo e nos auriculares.
- **Escolle mellor a canción ca o orixinal.** Descarta os resultados cuxa duración non cadra coa do tema (EPs completos, recompilatorios, documentais) e estima a duración cando o álbum non a trae. O seguinte tema prepárase uns 15 segundos antes de que remate o actual, así que saltar é case instantáneo.
- **APK duns 22 MB**, fronte aos ~650 MB das primeiras builds de depuración, axustando a compilación de Rust e eliminando recursos sen uso.

## Resultado

Probado en emulador e nun móbil real con Android 13: busca, cola, reprodución coa pantalla bloqueada e saída por Bluetooth. A versión de escritorio queda intacta e os seus 691 tests seguen pasando.
