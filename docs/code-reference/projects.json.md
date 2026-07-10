# projects.json

Public project catalog consumed by the website after parsing builder data.

## Quick Facts

- Lines: 46
- Size: 1,490 bytes
- Talks to: GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
{
  "categories": [
    {
      "id": "analog-mixed-signal",
      "label": "Analog and Mixed Signal",
      "description": "Circuit-level work including amplifiers, filters, converters, measurement front ends, power stages, and mixed-signal interfaces.",
      "accent": "#117c7a"
    },
    {
      "id": "digital",
      "label": "Digital",
      "description": "Digital design projects involving logic design, FPGA workflows, verification, timing, and ASIC-oriented architecture.",
      "accent": "#52606d"
    },
    {
      "id": "embedded",
      "label": "Embedded",
      "description": "MCU-based systems with firmware, board bring-up, interfaces, sensing, control, and hardware/software integration.",
      "accent": "#d18b21"
    }
  ],
  "funFacts": [],
  "funFactsRich": null,
  "profile": {
    "brandImage": "",
    "brandText": "Portfolio",
    "contactIntro": "",
    "displayName": "",
    "email": "",
    "githubUrl": "",
    "heroImage": "",
    "linkedinUrl": "",
    "phone": "",
    "portfolioLabel": "Portfolio",
    "profileImage": "",
    "resumeUrl": "",
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?