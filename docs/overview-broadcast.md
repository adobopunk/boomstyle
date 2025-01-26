---
title: 'Overview - Broadcast Assets'
intro: 'Commonly used broadcast media asset and guidelines'
section: Getting Started
order: 2
---

## Background loop

A background loop is a seamless animation designed to enhance the visual quality of broadcasts and social assets when displayed behind other graphics. These loops can play indefinitely on a broadcast, as the ending frame seamlessly connects to the starting frame, creating the illusion of an infinite video.

Each background loop is custom-designed for a specific event, complementing its unique style. A well-crafted background loop can serve as a key element in defining the overall visual identity of the broadcast.

<figure>
    <video autoplay loop muted playsinline>
        <source src="/src/assets/img/getting started/backgroundLoopExample.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video><figcaption>Background loop designed for the Code Freedom: Nightlife event.</figcaption>
</figure>

## Frame Rate

The frame rate refers to the number of frames displayed per second in a video asset. For most video assets, we use a frame rate of 29.97 fps (frames per second) or 30 fps, meaning each second consists of approximately 30 individual images. This frame rate is the standard for smooth playback in digital video. For simplicity, this guide treats 29.97 fps and 30 fps as equivalent.

An exception to this standard is animated video announcements, which are occasionally rendered at 24 fps. This lower frame rate aligns with the traditional "cinematic" frame rate used in films, providing a stylistic aesthetic that mimics the feel of motion pictures.

## Stinger

Stingers are transitional video elements designed to create a seamless bridge between scenes during live broadcasts or video editing. Unlike most video assets, which are commonly delivered as .mp4 files, stingers require a format that supports transparency, or the alpha channel. The alpha channel specifies which parts of the video should be transparent, allowing for smooth scene transitions. To capture this transparency, stingers are rendered as .mov files, which are larger than .mp4 files due to the additional data they contain.

It’s important to note that .mov files, including stingers, are not optimized for direct upload to social media. Their primary use is in live broadcast environments or within video editing software, where they serve as transition elements between clips.

#### Technical Specifications

A standard BoomTV stinger is 2 seconds long with a frame rate of 29.97 frames per second. However, shorter 1-second stingers are sometimes used, and more complex stingers may extend beyond 2 seconds. Regardless of the duration, the key feature of any stinger is the transitional point exactly halfway through the animation. This the moment when the animation fully covers the screen, allowing for a clean scene cut.

For example: A 2-second stinger at 29.97fps will have its transitional point at 1 second (30 frames out of 60). At this point, the animation should completely obscure the underlying scene, making it safe to switch to the next scene while the animation completes.

When delivering broadcast assets, it’s essential to document the stinger’s length and frame rate for the broadcast lead to ensure proper integration into the production workflow.

<figure>
    <video autoplay loop muted playsinline>
        <source src="/src/assets/img/getting started/stingerExample.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video><figcaption>Example of a broadcast stinger transitioning from the caster scene to the leaderboard scene.</figcaption>
</figure>
