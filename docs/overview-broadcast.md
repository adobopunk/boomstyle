---
title: 'Overview - Broadcast Assets'
intro: 'Commonly used broadcast media assets and guidelines'
section: Getting Started
order: 2
---

## .mp4

A widely-used video file format optimized for web and digital distribution. It offers high compression and small file sizes while maintaining good video quality, making it ideal for fast loading and streaming on most devices and platforms. Due to its universal compatibility and efficient performance, .mp4 is the standard format for web videos.

## .mov

A video file format developed by Apple, supporting higher-quality video with additional features like transparency (alpha channel). It’s commonly used in professional editing and broadcast workflows but results in larger file sizes.

## Background Loop

A background loop is a seamless animation designed to enhance the visual quality of broadcasts and social assets when displayed behind other graphics. These loops can play indefinitely on a broadcast, as the ending frame seamlessly connects to the starting frame, creating the illusion of an infinite video.

Each background loop is custom-designed for a specific event, complementing its unique style. A well-crafted background loop can serve as a key element in defining the overall visual identity of the broadcast.

#### Technical Specifications

A standard BoomTV background loop for use in event social assets and broadcast scenes is 29.97fps and around 10 seconds in length. However, the exact length is not important, and depending on artistic needs a background loop could be as long as 60 seconds and as short as just a few seconds.

<figure>
    <video autoplay loop muted playsinline>
        <source src="/src/assets/img/getting started/backgroundLoopExample.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video><figcaption>Background loop designed for the Code Freedom: Nightlife event.</figcaption>
</figure>

## fps

Short for Frames Per Second, referring to Frame Rate.

## Frame Rate

Frame rate refers to the number of frames (individual images) displayed per second in a video asset. For most video assets, we use a frame rate of 29.97 fps (frames per second) or 30 fps, meaning each second consists of approximately 30 individual images. This frame rate is the standard for smooth playback in digital video. For simplicity, this guide treats 29.97 fps and 30 fps as equivalent.

An exception to this standard is animated video announcements, which are occasionally rendered at 24 fps. This lower frame rate aligns with the traditional "cinematic" frame rate used in films, providing a stylistic aesthetic that mimics the feel of motion pictures.

## HD

A video resolution standard that provides higher clarity and detail compared to standard definition (SD). Common HD resolutions include 1280x720 (720p) and 1920x1080 (1080p), with 1080p often referred to as "Full HD." HD is widely used in broadcasts, online videos, and digital media for its sharp image quality, ease of use, and suitability for modern screens.

<blockquote>In general, BoomTV files labeled with "_HD" at the end of the file name indicate this video is 1080p.</blockquote>

## Intermission Screen

An intermission screen is a static or animated graphic displayed during broadcasts to signal breaks or transitions. Common examples include messages like "Starting Soon," "Be Right Back," or "Ending Stream." These screens help maintain viewer engagement during downtime by providing updates or setting expectations while the main content is paused or transitioning.

For BoomTV events, a single intermission screen is designed for all broadcast messages, with a blank space designed for the broadcast lead to incorporate the appropriate message for viewers, as well as a designated location for a live countdown if desired. For intermission screens and other screens where text is altered during a broadcast, it's important to coordinate with the BoomTV creative team and/or refer to this style guide for specifics on the appropriate typeface and sizing to use.

#### Technical Specifications

BoomTV intermission screens typically combine a background loop with a static graphic, designed to be layered in broadcast software. Since the composition of intermission screens can vary by event, it’s essential to consult the documentation for each specific broadcast package.

<figure>
  <video autoplay loop muted playsinline>
      <source src="/src/assets/img/PG2025/intermissionExample.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video><figcaption>Example of an intermission screen asset for Proving Grounds events. Space has been left near the screen center (between the two triangles) for a countdown timer, and the black bar directly above the game logos is the designated location for an intermission message.</figcaption>
</figure>

## Stinger

Stingers are transitional video elements designed to create a seamless bridge between scenes during live broadcasts or video editing. Unlike most video assets, which are commonly delivered as .mp4 files, stingers require a format that supports transparency, or the alpha channel. The alpha channel specifies which parts of the video should be transparent, allowing for smooth scene transitions. To capture this transparency, stingers are rendered as .mov files, which are larger than .mp4 files due to the additional data they contain.

It’s important to note that .mov files, including stingers, are not optimized for direct upload to social media. Their primary use is in live broadcast environments or within video editing software, where they serve as transition elements between clips.

#### Technical Specifications

A standard BoomTV stinger is 2 seconds long with a frame rate of 29.97 fps. However, shorter 1-second stingers are sometimes used, and more complex stingers may extend beyond 2 seconds. Regardless of the duration, the key feature of any stinger is the transitional point exactly halfway through the animation. This the moment when the animation fully covers the screen, allowing for a clean scene cut.

For example: A 2-second stinger at 29.97fps will have its transitional point at 1 second (30 frames out of 60). At this point, the animation should completely obscure the underlying scene, making it safe to switch to the next scene while the animation completes.

When delivering broadcast assets, documentation of the stinger’s length and frame rate are provided for the broadcast lead to ensure proper integration into the production workflow.

<figure>
    <video autoplay loop muted playsinline>
        <source src="/src/assets/img/getting started/stingerExample.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video><figcaption>Example of a broadcast stinger transitioning from the caster scene to the leaderboard scene.</figcaption>
</figure>
