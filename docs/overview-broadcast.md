---
title: 'Overview - Broadcast Assets'
intro: 'Commonly used broadcast media assets and guidelines'
section: Getting Started
order: 2
---

## Background Loop

A background loop is a seamless animation designed to play indefinitely on a broadcast, as the ending frame seamlessly connects to the starting frame. Background loops can also be used to add animation to social assets.

Each background loop is custom-designed for a specific event, complementing its unique style, and is a key element in elevating the production value of a broadcast.

#### Technical Specifications

A standard BoomTV background loop is 29.97fps and around 10 seconds in length. However, the exact length is not important, and depending on artistic needs a background loop could be as long as 60 seconds and as short as just a few seconds.

<figure>
    <video autoplay loop muted playsinline>
        <source src="/src/assets/img/getting started/backgroundLoopExample.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video><figcaption>Background loop designed for the Code Freedom: Nightlife event.</figcaption>
</figure>

## Bug

A bug is a small still image or animated looping video that provides persistent branding for an event. The bug is intended to remain on-screen during gameplay, and should be small enough to not obscure any action while being large enough to add brand value to any clips.

<figure>
  <video autoplay loop muted playsinline>
      <source src="/src/assets/img/getting started/Bug_example_web.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video><figcaption>Animated Bug for Fortnite Reunion, positioned in the top-right corner of the screen.</figcaption>
</figure>

#### Technical Specifications

The exact dimensions of a bug will vary from event to event, as they are designed around the event's custom logo. An animated bug will be rendered in 29.97 fps. A bug that requires transparency may be exported as a .png or .mov, while a .mp4 or .jpg may suffice for a simple rectangular bug.

## Intermission Screen

An intermission screen is a static or animated broadcast graphic designed to indicate breaks or transitions. For BoomTV events, a single intermission screen is designed for all broadcast messages, with blank spaces for the broadcast lead to incorporate a message for viewers, and a live countdown if desired. Possible messages for an intermission screen include "Starting Soon," "Be Right Back," or "Ending Stream."

This style guide includes specifics on the appropriate typeface and sizing to use with your intermission screen.

#### Technical Specifications

BoomTV intermission screens combine a background loop with a static graphic, designed to be layered in broadcast software. The composition of intermission screens can vary by event.

<figure>
  <video autoplay loop muted playsinline>
      <source src="/src/assets/img/PG2025/PG_2025_Intermission_web.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video><figcaption>Example of an intermission screen asset for Proving Grounds events. Space has been left near the screen center (between the two triangles) for a countdown timer, and the black bar directly above the game logos is the designated location for an intermission message.</figcaption>
</figure>

Screen

A general term referring to any visual display used during broadcasts, including gameplay feeds, intermission screens, and overlays. BoomTV uses "screen" to describe specific assets, such as intermission screens (used between matches to show event information) or standby screens (used to indicate pauses in the broadcast).

## Stinger

Stingers are transitional video elements designed to create a bridge between scenes. A typical stinger is 2 seconds in length. However, shorter 1-second stingers are sometimes used, and more complex stingers may extend beyond 2 seconds.

#### Technical Specifications

Stingers are rendered at 29.97 fps in the .mov file format, which supports an alpha channel to specify which parts of the video are rendered as transparent.

A stinger's transitional point sits exactly halfway through the animation. This the moment when the animation fully covers the screen, allowing for a clean scene cut. A 2-second stinger will have its transitional point at 1 second (30 frames out of 60). At frame 30, the animation should completely obscure the underlying scene, making it safe to switch to the next scene while the animation completes.

<figure>
    <video autoplay loop muted playsinline>
        <source src="/src/assets/img/getting started/stingerExample.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video><figcaption>Example of a broadcast stinger transitioning from the caster scene to the leaderboard scene.</figcaption>
</figure>
