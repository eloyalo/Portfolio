---
title: Nuclear para Android
summary: Port para Android do leitor de música de código aberto Nuclear, que só existia para desktop, adaptado e otimizado para telemóvel.
year: 2026
role: Projeto pessoal
sector: Código aberto
stack: [TypeScript, React, Rust, Tauri, Android]
order: 1
repo: https://github.com/eloyalo/nuclear-android
screenshots:
  - src: ../../../assets/projects/nuclear-android/queue.png
    alt: A reproduzir um álbum com a fila aberta
  - src: ../../../assets/projects/nuclear-android/notification.png
    alt: Controlos de reprodução em segundo plano
  - src: ../../../assets/projects/nuclear-android/album.png
    alt: Página de um álbum
---

## O ponto de partida

O [Nuclear](https://github.com/nukeop/nuclear) é um leitor de música livre, sem anúncios nem rastreio, feito com Tauri: TypeScript e React na interface, Rust por baixo. Só havia versões para Windows, macOS e Linux. Fiz o port para Android como fork não oficial, e não me limitei a enfiar a versão de desktop num ecrã pequeno.

## O que fiz

- **Pô-lo a arrancar em Android.** Separei do build móvel as integrações que só fazem sentido em desktop e mudei a forma como se criam as ligações HTTPS: em Android, a verificação de certificados por omissão deixava qualquer pedido pendurado.
- **YouTube sem yt-dlp.** O Android não consegue executar binários descarregados, por isso a pesquisa e os streams passam pelo [rustypipe](https://codeberg.org/ThetaDev/rustypipe) e pela API do leitor do YouTube. Se a Google limita os pedidos, a app espera em vez de tentar outra vez em ciclo.
- **Interface pensada para telemóvel.** Layout compacto abaixo de 640 px, com a navegação e a fila em painéis laterais, tabelas legíveis sem hover, botão de voltar do Android e margens do sistema.
- **Reprodução em segundo plano**, com notificação e controlos no ecrã de bloqueio e nos auscultadores.
- **Escolhe melhor a música do que o original.** Descarta resultados cuja duração não bate com a da faixa (EPs completos, compilações, documentários) e estima a duração quando o álbum não a traz. A faixa seguinte é preparada uns 15 segundos antes de a atual acabar, por isso saltar é quase instantâneo.
- **APK de cerca de 22 MB**, face aos ~650 MB das primeiras builds de depuração, ajustando a compilação de Rust e eliminando recursos sem uso.

## Resultado

Testado em emulador e num telemóvel real com Android 13: pesquisa, fila, reprodução com o ecrã bloqueado e saída por Bluetooth. A versão de desktop fica intacta e os seus 691 testes continuam a passar.
