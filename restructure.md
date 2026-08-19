# Portfolio Website V2 — Feedback & Improvement Plan

## 1. Purpose

This document converts the portfolio feedback into an actionable redesign plan.

### Original feedback

- มีคำผิด และเบิ้นคำอยู่ระวังด้วย
- 2 สีมืดไป ลองปรับมูดและโทน
- ข้อมูลมันดูดากๆไป
- เพิ่มลูกเล่นให้เยอะกว่านี้หน่อย
- ลองทำข้อมูลแบบเรียลไลฟ์กว่านี้นิดนึง
- เช่น เชื่อมกับ LinkedIn

### Main direction

The portfolio should feel less like a static page containing information and more like:

> **A living profile of an engineer.**

The goal is to combine:
- Strong visual identity
- Better information hierarchy
- Meaningful animation
- Real-time / dynamic data
- Personal engineering identity
- Clean and readable presentation

---

# 2. Current Portfolio Assessment

The current implementation already contains:

- Fixed navigation
- Smooth scrolling
- Hero section
- About section
- Project cards
- Certificate cards
- Contact cards
- Scroll reveal animations
- Navbar scroll state
- Hover animations
- Responsive layouts
- Gradient-based visual styling

The current CSS uses a very dark Saturn-inspired palette with dark blue/purple backgrounds and gold/orange accents.

### Main issue

The current design relies heavily on:

`dark background + dark cards + gold text + paragraph content`

This can make the page feel visually heavy and information-dense.

The redesign should therefore focus on **contrast, hierarchy, spacing, and interaction**, rather than simply adding more effects.

---

# 3. Design Direction

## 3.1 Mood & Tone

### Current direction

- Very dark
- Saturn-inspired
- Gold/orange accent
- Multiple dark surfaces

### Proposed direction

Use a more modern **AI / Robotics / Engineering** visual language.

Recommended palette:

| Role | Color |
|---|---|
| Background | `#0B1020` |
| Surface | `#121A2F` |
| Surface Light | `#18233D` |
| Primary | `#6C8CFF` |
| Accent | `#A78BFA` |
| Main Text | `#F4F7FF` |
| Secondary Text | `#9AA7C2` |

### Alternative direction

Use a **Light + Dark Hybrid** layout:

- Hero → dark
- About → light
- Projects → soft gray/blue
- Certificates → light
- Contact → dark

The objective is to avoid making every section visually heavy.

---

# 4. Fix Content Quality

## 4.1 Proofread

Before adding new features:

- [ ] Check spelling
- [ ] Check duplicated words
- [ ] Check inconsistent capitalization
- [ ] Check punctuation
- [ ] Check grammar
- [ ] Check inconsistent technology naming
- [ ] Check inconsistent project status labels
- [ ] Check inconsistent wording between sections

## 4.2 Reduce Text Density

Current project cards rely heavily on paragraphs.

Instead, use a hierarchy like:

```text
PROJECT NAME

Short one-line description

[Technology] [Technology] [Technology]

2026 • Full Stack

View Project →
```

Longer descriptions should be revealed through interaction or a project detail view.

---

# 5. New Information Architecture

Recommended structure:

```text
NAV
│
├── About
├── Journey
├── Projects
├── Skills
├── Certificates
└── Contact
│
▼
HERO
│
▼
LIVE STATUS
│
▼
ABOUT
│
▼
JOURNEY
│
▼
CURRENTLY BUILDING
│
▼
PROJECTS
│
▼
SKILLS
│
▼
GITHUB ACTIVITY
│
▼
CERTIFICATES
│
▼
CONTACT
│
▼
FOOTER
```

---

# 6. Hero Section

## Goal

Make the first screen communicate identity immediately.

Suggested content:

```text
Vachiravith Polungnoen

Robotics × AI × Engineering

Building intelligent systems and solving real-world problems.

[ Explore My Work ]
[ LinkedIn ↗ ]
```

## Optional dynamic title

Rotate between:

```text
Robotics Engineer
AI Engineer
Problem Solver
Builder
```

Change every 2–3 seconds.

Keep the animation subtle.

---

# 7. Live Profile / Real-Life Data

The feedback specifically asks for information that feels more real and current.

Add a live profile area:

```text
CURRENTLY

AI Engineering
🎓 KMITL
💻 GitHub
💼 LinkedIn

● Available for opportunities

Last updated: Today
```

This makes the website feel like a current profile rather than a static resume.

---

# 8. LinkedIn Integration

## Level 1 — Recommended starting point

Use LinkedIn as an external profile source.

Show:

- Current role
- Education
- Professional identity
- LinkedIn profile link

Example:

```text
LINKEDIN

Vachiravith Polungnoen
Robotics & AI Engineering

[ View LinkedIn Profile → ]
```

Do not simply embed LinkedIn content without a clear purpose.

## Level 2 — Future enhancement

If a reliable API / integration is available, investigate whether selected professional information can be synchronized.

Do not make the portfolio dependent on LinkedIn being available.

---

# 9. GitHub Live Data

GitHub is a particularly strong candidate for live data because the portfolio already contains GitHub project links.

Potential live data:

- Public repositories
- Followers
- Following
- Contribution/activity information
- Latest repositories
- Repository languages
- Recently updated projects

Example:

```text
GITHUB

12 Repositories
48 Followers

Latest

Adaptive-AI-Pipeline
Updated 2 days ago

Transformer
Updated 1 week ago
```

This can be implemented with the GitHub API.

---

# 10. Currently Building

Add a section showing active work.

Example:

```text
CURRENTLY BUILDING

AI Security Platform
██████████████░░░░░░ 72%

Working on:
• Agent architecture
• Security layer
• Local LLM integration

Last updated:
Today
```

Another example:

```text
Robotics Research
████████████████░░░░ 84%

Training locomotion model
```

The exact projects and progress values should only be added when they represent real work.

---

# 11. Journey Timeline

Replace some of the static About cards with a timeline.

Example:

```text
2023
● Started Robotics & AI

2024
● Robotics Lab
● ABB Robot

2025
● AI / Computer Vision
● Full-stack projects

2026
● AI Engineering Internship
● Building AI systems

NOW
```

The timeline gives the visitor a sense of progression rather than only listing achievements.

---

# 12. Skills Section

Add a visual skills overview.

Example:

```text
AI
███████████████

Robotics
████████████

Web
███████████

Python
██████████████
```

Avoid representing skill levels as precise measurements unless they have a clear meaning.

Alternative:

Use technology groups instead:

```text
AI
Python • LLM • Computer Vision • Machine Learning

Robotics
Arduino • ABB • Control Systems • Automation

Web
Next.js • JavaScript • PostgreSQL • APIs
```

---

# 13. Project Cards

## Current problem

The current cards are mostly:

- Project title
- Long description
- Technologies
- GitHub link

## New structure

```text
┌───────────────────────────────────┐
│ POPP-UP                           │
│ WEB / AI                          │
│                                   │
│ Personalized content platform     │
│ powered by user preferences       │
│                                   │
│ [NextJS] [Python] [PostgreSQL]   │
│                                   │
│ 2026 • Full Stack                 │
│                                   │
│ View Project →                    │
└───────────────────────────────────┘
```

## Interaction

Normal state:

```text
Project
Short description
Technologies
```

Hover state:

```text
Project
Short description
Technologies
────────────────
↗ View Project
↗ GitHub
```

Information should progressively reveal instead of showing everything immediately.

---

# 14. Animation System

The goal is not to put animation everywhere.

Every animation should have a purpose.

## 14.1 Cursor Glow

A subtle radial glow follows the cursor.

Purpose:

- Adds depth
- Makes the page feel interactive
- Fits AI / futuristic visual language

Keep opacity low.

---

## 14.2 Magnetic / Tilt Cards

Cards can react slightly to cursor movement.

Recommended maximum:

```text
3–6 degrees
```

The effect should be subtle.

Do not make cards move excessively.

---

## 14.3 Scroll Reveal

Keep the existing reveal animation but improve it.

Current concept:

```text
opacity: 0
translateY(30px)
```

Possible enhancement:

- Fade
- Slight translate
- Small blur reduction
- Stagger child elements

Example:

```text
Title
   ↓
Description
      ↓
Technology tags
         ↓
Action buttons
```

---

## 14.4 Scroll Progress

Add a thin progress bar at the top.

Example:

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
██████████████░░░░░░░░░░░░░░░░░░░░
```

The bar represents the user's position on the page.

---

## 14.5 Number Counter

Use animated counters for meaningful metrics.

Example:

```text
08
Projects

03
Areas

02
Research Projects
```

Numbers animate when the section enters the viewport.

Only use real numbers.

---

## 14.6 Certificate Interaction

Instead of only displaying the certificate image:

```text
Certificate
Institution
Description

[ View Certificate ↗ ]
```

On click:

- Open modal
- Display larger certificate
- Allow closing with Escape / close button

---

## 14.7 Section Transitions

Avoid abrupt changes between sections.

Use:

- Gradient transitions
- Background glow
- Subtle decorative elements
- Different surface tones

The transition should feel continuous.

---

# 15. Contact Interaction

Possible concept:

```text
$ ./connect

Available channels:

> LinkedIn
> GitHub
> Email

Status: ● ONLINE

Choose a channel →
```

This gives the contact section a small engineering personality.

Do not make the entire website a terminal.

Use this only as a visual concept for the contact area.

---

# 16. Easter Egg

Optional.

Examples:

- Keyboard sequence
- Typing `sudo`
- Hidden interaction
- Developer-style message

Example result:

```text
ACCESS GRANTED

Welcome, Engineer.
```

Keep this hidden and lightweight.

---

# 17. Technology Strategy

## CSS

Use CSS for:

- Hover effects
- Glow
- Gradients
- Card movement
- Buttons
- Navbar
- Background effects
- Basic transitions

## JavaScript

Use JavaScript for:

- Scroll progress
- Counters
- Cursor interaction
- Magnetic cards
- Text rotation
- Modals
- API calls
- Dynamic status

## Optional Libraries

### GSAP

Use for more advanced animations.

Potential uses:

- Timeline animation
- Complex scroll animations
- Stagger effects
- Page transitions

### Lenis

Potentially use for smoother scrolling.

### Three.js

Only use if there is a real purpose for 3D.

Do not add Three.js simply because the portfolio is about robotics.

Performance should remain a priority.

---

# 18. Real-Time Data Roadmap

## Phase 1

Static but realistic data:

- LinkedIn profile link
- GitHub profile link
- Current role
- Current education
- Current projects
- Last updated date

## Phase 2

GitHub API:

- Repository count
- Followers
- Latest repositories
- Repository languages
- Recent activity

## Phase 3

More dynamic information:

- Currently building status
- Project update dates
- Activity feed
- Selected professional information

The portfolio should remain functional even if an external API fails.

---

# 19. Recommended Development Phases

## Phase 1 — Visual Redesign

- [ ] Change color palette
- [ ] Reduce visual darkness
- [ ] Improve typography
- [ ] Improve whitespace
- [ ] Reduce card-heavy layout
- [ ] Fix spelling
- [ ] Fix duplicated words
- [ ] Fix inconsistent wording
- [ ] Improve project descriptions

## Phase 2 — Interaction

- [ ] Cursor glow
- [ ] Scroll progress
- [ ] Better scroll reveal
- [ ] Magnetic / tilt cards
- [ ] Counter animation
- [ ] Interactive certificates
- [ ] Better section transitions

## Phase 3 — Live Data

- [ ] GitHub API
- [ ] Repository statistics
- [ ] Latest repositories
- [ ] GitHub activity
- [ ] LinkedIn profile integration/link
- [ ] Current status
- [ ] Last updated timestamp

## Phase 4 — Personal Identity

- [ ] Currently Building
- [ ] Journey timeline
- [ ] Engineering-themed contact interaction
- [ ] Easter egg
- [ ] Small personalized interactions

---

# 20. Reference Websites / Resources

## Awwwards

https://www.awwwards.com/

Use it for:

- Portfolio inspiration
- Interaction design
- Typography
- Storytelling
- Unusual layouts

## Codrops

https://tympanus.net/codrops/

Recommended for:

- Cursor effects
- Hover effects
- Scroll animations
- Text animations
- Creative UI
- WebGL experiments

## GSAP Showcase

https://gsap.com/showcase/

Recommended for:

- Production-level animation inspiration
- Scroll interactions
- Complex transitions
- Motion design

## Three.js Examples

https://threejs.org/examples/

Recommended for:

- 3D interaction
- Particles
- Interactive objects
- WebGL experiments

Use carefully because excessive 3D can hurt performance.

---

# 21. Final Design Principle

Do not solve the feedback by simply adding more animations.

The current problem is primarily structural:

```text
Old approach

Information
↓
Card
↓
More information
↓
Card
↓
More information
```

The new approach should be:

```text
Identity
↓
Current state
↓
Journey
↓
What I'm building
↓
What I've built
↓
Live evidence
↓
Connect
```

The website should communicate:

> **This is an engineer who is actively learning, building, experimenting, and improving.**

Animation, live data, GitHub activity, timeline, and interactive components should support that story rather than exist only as decoration.

---

# 22. Suggested V2 Page Structure

```text
01 — HERO
Vachiravith Polungnoen
Robotics × AI × Engineering

02 — LIVE STATUS
Current role
Education
GitHub
LinkedIn
Availability

03 — ABOUT
Short introduction
Key metrics

04 — JOURNEY
2023 → 2024 → 2025 → 2026

05 — CURRENTLY BUILDING
Active projects
Progress
Recent updates

06 — PROJECTS
Interactive project cards

07 — SKILLS
AI
Robotics
Web
Programming

08 — GITHUB ACTIVITY
Live GitHub data

09 — CERTIFICATES
Interactive certificate gallery

10 — CONTACT
LinkedIn
GitHub
Email

11 — FOOTER
Minimal personal signature
```

## Success Criteria

The redesign is successful when:

- The page no longer feels excessively dark.
- Information can be understood quickly without reading large paragraphs.
- Animations make the site feel alive without becoming distracting.
- Projects have stronger visual hierarchy.
- Visitors can see what is currently happening, not only what happened in the past.
- GitHub provides real evidence of ongoing development.
- LinkedIn provides a direct professional connection.
- The website feels like a personal engineering identity rather than a generic portfolio template.
