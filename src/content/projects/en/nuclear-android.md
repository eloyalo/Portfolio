---
title: Nuclear for Android
summary: An Android port of Nuclear, an open-source music player that only existed for desktop, adapted and optimised for phones.
year: 2026
role: Personal project
sector: Open source
stack: [TypeScript, React, Rust, Tauri, Android]
order: 1
repo: https://github.com/eloyalo/nuclear-android
screenshots:
  - src: ../../../assets/projects/nuclear-android/queue.png
    alt: Playing an album with the queue open
  - src: ../../../assets/projects/nuclear-android/notification.png
    alt: Background playback controls
  - src: ../../../assets/projects/nuclear-android/album.png
    alt: Album page
---

## Where it started

[Nuclear](https://github.com/nukeop/nuclear) is a free music player with no ads or tracking, built with Tauri: TypeScript and React for the UI, Rust underneath. It only shipped for Windows, macOS and Linux. I ported it to Android as an unofficial fork, and I didn't stop at squeezing the desktop app onto a small screen.

## What I did

- **Getting it to run on Android.** I split desktop-only integrations out of the mobile build and changed how HTTPS clients are created: on Android, the default certificate verifier left every request hanging.
- **YouTube without yt-dlp.** Android can't run downloaded binaries, so search and streams go through [rustypipe](https://codeberg.org/ThetaDev/rustypipe) and YouTube's player API. When Google rate-limits, the app backs off instead of retrying in a loop.
- **A phone-first UI.** A compact layout under 640px, with navigation and queue as drawers, readable track tables without hover, the Android back button and system insets.
- **Background playback**, with a media notification plus lock-screen and headset controls.
- **Picks the right song more often than the original.** It drops results whose length doesn't match the track (full EPs, compilations, documentaries) and estimates the duration when the album doesn't provide it. The next track is prepared about 15 seconds before the current one ends, so skipping is almost instant.
- **A ~22 MB APK**, down from ~650 MB for the first debug builds, by tuning the Rust release profile and stripping unused resources.

## Result

Tested on an emulator and on a real Android 13 phone: search, queue, playback with the screen locked and Bluetooth output. The desktop app is untouched and its 691 tests still pass.
