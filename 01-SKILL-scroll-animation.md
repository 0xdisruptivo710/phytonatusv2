# SKILL: 3D Scroll-Controlled Video Animation

## What this skill does
Builds websites where a video animation is controlled by the user's scroll.
Scrolling down advances the video, scrolling up rewinds it.
The hero section stays locked on screen until the video finishes.
This is the same effect used by Apple on the AirPods Pro website.

---

## When to apply this skill
- Hero section with product animation controlled by scroll
- Deconstructed product effect on page load
- Cinematic website intro where scrolling drives the story
- Any scroll-driven video playback

---

## Core technical rules

### Video requirements
- Video must be re-encoded so EVERY frame is a keyframe (keyint=1)
- Without this, scroll animation will stutter and freeze
- Format: .mp4 (H.264), Resolution: 1080p
- Always: muted, controls hidden

### Hero section behavior
- Hero LOCKS on screen while video plays
- User cannot scroll past until video reaches last frame
- Video fills 100% of hero (object-fit: cover)
- Text and CTA sit on top of video
- Subtle dark gradient overlay at bottom for text legibility

### Scroll mapping
- Scroll DOWN → video advances frame by frame
- Scroll UP → video rewinds frame by frame
- Smooth interpolation between frames, no jumps

### Feature cards below hero
- Use continuous autoplay loop video (NOT scroll-controlled)
- Autoplay, muted, loop — plays automatically on page load

---

## Implementation pattern

### Hero scroll animation
```
1. Place video as background of hero section
2. Set hero to position: sticky, height: 100vh
3. Create scroll container height = (video duration × scroll speed px)
4. Map scrollY to video.currentTime proportionally
5. On scroll: video.currentTime = scrollProgress × video.duration
6. Lock page scroll until video.currentTime >= video.duration
7. Unlock and resume normal scroll
```

### Gradient overlay
```css
background: linear-gradient(
  to bottom,
  transparent 0%,
  transparent 50%,
  rgba(0,0,0,0.4) 80%,
  rgba(0,0,0,0.65) 100%
);
```

---

## Layout rules

### Hero section
- Full viewport: 100vh
- Video as background (muted, no controls, object-fit: cover)
- Headline: large, light weight font
- CTA: outlined button, brand color
- External store link: small, top right or below CTA

### Ingredient cards (below hero)
- Grid: 2 columns desktop, 1 column mobile
- Each card: looping video + ingredient name + short descriptor
- White or off-white background, generous whitespace

---

## Mistakes to avoid
- Never use video without FFMPEG re-encode → causes stutter
- Never show video controls → breaks cinematic feel
- Never skip hero lock → user scrolls past before animation ends
- Only hero uses scroll control — all other videos autoplay loop
- Always add gradient overlay — never leave text directly on video
- Always test on mobile — hero video must be responsive
