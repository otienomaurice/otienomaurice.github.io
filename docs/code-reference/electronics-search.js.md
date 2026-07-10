# electronics-search.js

Electronics vocabulary and search support used by the website search behavior.

## Quick Facts

- Lines: 162
- Size: 9,856 bytes
- Talks to: GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 2

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Functions

### `normalize` line 134

Validates or normalizes input so later code receives safe predictable values.

Signature or declaration: `function normalize(value) {`

### `projectSpecificKeywords` line 138

Named function in the repository. Inspect the surrounding lines to learn its exact inputs and outputs.

Signature or declaration: `function projectSpecificKeywords(project, categoryLabel = "") {`

## Important Constants And Variables

- Line 2: `analogTerms` from `const analogTerms = [`
- Line 20: `powerTerms` from `const powerTerms = [`
- Line 33: `pcbTerms` from `const pcbTerms = [`
- Line 44: `testTerms` from `const testTerms = [`
- Line 55: `digitalTerms` from `const digitalTerms = [`
- Line 66: `embeddedTerms` from `const embeddedTerms = [`
- Line 76: `components` from `const components = [`
- Line 85: `actions` from `const actions = [`
- Line 92: `metrics` from `const metrics = [`
- Line 99: `toolTerms` from `const toolTerms = [`
- Line 105: `phraseTerms` from `const phraseTerms = [];`
- Line 114: `categoryKeywords` from `const categoryKeywords = {`
- Line 120: `allKeywords` from `const allKeywords = [...new Set([`
- Line 139: `haystack` from `const haystack = [`
- Line 149: `buckets` from `const buckets = new Set(categoryKeywords[project?.category] || []);`
- Line 154: `compactTerm` from `const compactTerm = term.replace(/[^a-z0-9+#]+/g, " ").trim();`

## Representative Opening Snippet

```
(function () {
  const analogTerms = [
    "op amp", "operational amplifier", "fully differential op amp", "differential amplifier", "instrumentation amplifier",
    "transimpedance amplifier", "transconductance amplifier", "current mirror", "cascode", "folded cascode",
    "common source", "common gate", "common drain", "emitter follower", "source follower", "differential pair",
    "active load", "gain stage", "output stage", "input stage", "bias circuit", "bandgap reference",
    "voltage reference", "current reference", "low noise", "offset voltage", "input bias current", "gain bandwidth",
    "phase margin", "slew rate", "common mode", "common mode range", "cmrr", "psrr", "loop gain",
    "stability", "compensation", "miller compensation", "frequency response", "bode plot", "pole zero",
    "small signal", "large signal", "noise analysis", "thermal noise", "flicker noise", "shot noise",
    "analog filter", "low pass filter", "high pass filter", "band pass filter", "notch filter", "active filter",
    "rc filter", "rlc circuit", "resonance", "q factor", "cutoff frequency", "impedance", "admittance",
    "matching network", "attenuator", "buffer", "comparator", "window comparator", "schmitt trigger", "hysteresis",
    "oscillator", "vco", "voltage controlled oscillator", "relaxation oscillator", "ring oscillator", "crystal oscillator",
    "pll", "phase locked loop", "charge pump", "sample and hold", "track and hold", "analog switch",
    "multiplexer", "adc", "dac", "data converter", "sigma delta", "successive approximation", "sar adc",
    "pipeline adc", "integrator", "differentiator", "rectifier", "precision rectifier", "peak detector"
  ];

  const powerTerms = [
    "ac to dc", "charger", "battery charger", "power supply", "bench supply", "linear regulator", "ldo",
    "switching regulator", "buck converter", "boost converter", "buck boost", "flyback", "forward converter",
    "sepic", "inverter", "rectifier bridge", "diode bridge", "full wave rectifier", "half wave rectifier",
    "ripple", "load regulation", "line regulation", "transient response", "power stage", "mosfet driver",
    "gate driver", "current limit", "overvoltage", "undervoltage", "reverse polarity", "thermal shutdown",
    "power path", "battery management", "bms", "cc cv", "constant current", "constant voltage", "trickle charge",
    "precharge", "protection circuit", "fuse", "polyfuse", "tvs diode", "esd diode", "snubber", "clamp",
    "soft start", "inrush current", "efficiency", "loss budget", "heat sink", "thermal resistance", "power dissipation",
    "load switch", "ideal diode", "current sense", "shunt resistor", "hall sensor", "isolation", "transformer",
    "optoisolator", "dc dc", "ac dc", "emi filter", "common mode choke", "ferrite bead", "ground loop"
  ];

  const pcbTerms = [
    "pcb", "printed circuit board", "schematic", "layout", "footprint", "symbol", "netlist", "bom",
    "gerber", "drill file", "pick and place", "assembly", "bring up", "board bring up", "prototype",
    "revision", "rev a", "dfm", "dft", "design rule", "clearance", "creepage", "trace width", "via",
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?