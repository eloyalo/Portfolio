---
title: Nuclear para Android
summary: Port a Android del reproductor de música de código abierto Nuclear, que solo existía para escritorio, adaptado y optimizado para el móvil.
year: 2026
role: Proyecto personal
sector: Código abierto
stack: [TypeScript, React, Rust, Tauri, Android]
order: 1
repo: https://github.com/eloyalo/nuclear-android
screenshots:
  - src: ../../../assets/projects/nuclear-android/queue.png
    alt: Reproduciendo un álbum con la cola abierta
  - src: ../../../assets/projects/nuclear-android/notification.png
    alt: Controles de reproducción en segundo plano
  - src: ../../../assets/projects/nuclear-android/album.png
    alt: Página de un álbum
---

## El punto de partida

[Nuclear](https://github.com/nukeop/nuclear) es un reproductor de música libre, sin anuncios ni rastreo, hecho con Tauri: TypeScript y React en la interfaz, Rust por debajo. Solo había versiones para Windows, macOS y Linux. Lo porté a Android como fork no oficial, y no me limité a meter la versión de escritorio en una pantalla pequeña.

## Qué hice

- **Que arrancara en Android.** Separé del build móvil las integraciones que solo tienen sentido en escritorio y cambié cómo se crean las conexiones HTTPS: en Android, la verificación de certificados por defecto dejaba colgada cualquier petición.
- **YouTube sin yt-dlp.** Android no puede ejecutar binarios descargados, así que la búsqueda y los streams pasan por [rustypipe](https://codeberg.org/ThetaDev/rustypipe) y la API del reproductor de YouTube. Si Google limita las peticiones, la app espera en vez de reintentar en bucle.
- **Interfaz pensada para el móvil.** Diseño compacto por debajo de 640 px, con la navegación y la cola en paneles laterales, tablas legibles sin hover, botón atrás de Android y márgenes del sistema.
- **Reproducción en segundo plano**, con notificación y controles en la pantalla de bloqueo y en los auriculares.
- **Elige mejor la canción que el original.** Descarta los resultados cuya duración no cuadra con la del tema (EPs completos, recopilatorios, documentales) y estima la duración cuando el álbum no la trae. El siguiente tema se prepara unos 15 segundos antes de que acabe el actual, así que saltar es casi instantáneo.
- **APK de unos 22 MB**, frente a los ~650 MB de las primeras builds de depuración, ajustando la compilación de Rust y eliminando recursos sin uso.

## Resultado

Probado en emulador y en un móvil real con Android 13: búsqueda, cola, reproducción con la pantalla bloqueada y salida por Bluetooth. La versión de escritorio queda intacta y sus 691 tests siguen pasando.
