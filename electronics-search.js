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
    "microvia", "blind via", "buried via", "ground plane", "power plane", "stackup", "controlled impedance",
    "differential pair routing", "return path", "star ground", "analog ground", "digital ground", "guard ring",
    "decoupling capacitor", "bypass capacitor", "bulk capacitor", "test point", "connector", "header",
    "silkscreen", "solder mask", "copper pour", "thermal relief", "stitching via", "keepout", "fiducial",
    "kicad", "altium", "eagle", "orcad", "cadence allegro", "pcbway", "jlcpcb", "osh park"
  ];

  const testTerms = [
    "oscilloscope", "scope capture", "logic analyzer", "spectrum analyzer", "network analyzer", "function generator",
    "signal generator", "multimeter", "dmm", "electronic load", "power analyzer", "curve tracer", "probe",
    "differential probe", "current probe", "bench test", "validation", "verification", "characterization",
    "measurement", "calibration", "test plan", "test report", "waveform", "transient", "dc sweep", "ac sweep",
    "monte carlo", "corner analysis", "temperature sweep", "load test", "line test", "frequency sweep",
    "gain measurement", "phase measurement", "jitter", "rise time", "fall time", "duty cycle", "pwm",
    "latency", "throughput", "noise floor", "snr", "thd", "thd+n", "eye diagram", "ber", "debug",
    "troubleshooting", "root cause", "failure analysis", "regression test", "unit test", "integration test"
  ];

  const digitalTerms = [
    "digital design", "logic design", "combinational logic", "sequential logic", "finite state machine", "fsm",
    "flip flop", "latch", "counter", "register", "shift register", "clock divider", "clock domain crossing",
    "cdc", "metastability", "synchronizer", "debounce", "timing closure", "setup time", "hold time",
    "static timing analysis", "sta", "fpga", "asic", "rtl", "verilog", "systemverilog", "vhdl",
    "testbench", "uvm", "simulation", "synthesis", "place and route", "bitstream", "vivado", "quartus",
    "modelsim", "questa", "iverilog", "yosys", "formal verification", "assertion", "coverage", "axi",
    "apb", "ahb", "spi controller", "i2c controller", "uart", "fifo", "ram", "rom", "bram",
    "pll clock", "mmcm", "serdes", "lvds", "gpio", "interrupt", "dma", "bus protocol"
  ];

  const embeddedTerms = [
    "embedded", "firmware", "microcontroller", "mcu", "stm32", "stm32cubeide", "arm cortex", "cortex m",
    "bare metal", "rtos", "freertos", "scheduler", "interrupt service routine", "isr", "timer",
    "pwm output", "adc input", "dac output", "gpio", "spi", "i2c", "uart", "usb", "can bus",
    "ethernet", "bootloader", "flash memory", "eeprom", "dma", "low power", "sleep mode", "watchdog",
    "sensor interface", "motor control", "control loop", "pid", "encoder", "hall sensor", "imu",
    "temperature sensor", "pressure sensor", "display", "lcd", "oled", "ble", "wifi", "esp32",
    "raspberry pi", "arduino", "nucleo", "debug probe", "st link", "jtag", "swd", "logic level"
  ];

  const components = [
    "resistor", "capacitor", "inductor", "diode", "zener diode", "schottky diode", "led", "bjt",
    "npn", "pnp", "mosfet", "nmos", "pmos", "jfet", "igbt", "scr", "triac", "relay",
    "opto coupler", "crystal", "resonator", "ferrite", "transformer", "connector", "terminal block",
    "potentiometer", "trimmer", "thermistor", "varistor", "photodiode", "phototransistor", "hall effect sensor",
    "current sensor", "voltage divider", "wheatstone bridge", "logic gate", "nand", "nor", "xor",
    "inverter", "multiplexer", "demultiplexer", "encoder", "decoder", "level shifter", "transceiver"
  ];

  const actions = [
    "design", "simulate", "measure", "validate", "debug", "characterize", "prototype", "build",
    "layout", "route", "solder", "assemble", "test", "verify", "model", "analyze", "optimize",
    "calculate", "tune", "filter", "amplify", "regulate", "rectify", "switch", "sample", "convert",
    "isolate", "protect", "sense", "drive", "interface", "program", "configure", "capture", "plot"
  ];

  const metrics = [
    "voltage", "current", "power", "gain", "bandwidth", "frequency", "phase", "delay", "latency",
    "impedance", "resistance", "capacitance", "inductance", "temperature", "efficiency", "ripple",
    "noise", "offset", "linearity", "resolution", "accuracy", "precision", "stability", "margin",
    "duty cycle", "rise time", "fall time", "settling time", "overshoot", "undershoot", "distortion"
  ];

  const toolTerms = [
    "ltspice", "spice", "pspice", "ngspice", "matlab", "simulink", "python", "numpy", "scipy",
    "excel", "kiCad", "kicad", "vivado", "stm32cubeide", "git", "github", "markdown", "c",
    "c++", "embedded c", "assembly", "makefile", "cmake", "openocd", "saleae", "sigrok"
  ];

  const phraseTerms = [];
  actions.forEach((action) => {
    metrics.forEach((metric) => phraseTerms.push(`${action} ${metric}`));
    components.forEach((component) => phraseTerms.push(`${action} ${component}`));
  });
  metrics.forEach((metric) => {
    components.forEach((component) => phraseTerms.push(`${metric} ${component}`));
  });

  const categoryKeywords = {
    "analog-mixed-signal": [...analogTerms, ...powerTerms, ...pcbTerms, ...testTerms, ...components, ...metrics],
    digital: [...digitalTerms, ...testTerms, ...pcbTerms, ...components, ...metrics],
    embedded: [...embeddedTerms, ...digitalTerms, ...testTerms, ...pcbTerms, ...components, ...metrics]
  };

  const allKeywords = [...new Set([
    ...analogTerms,
    ...powerTerms,
    ...pcbTerms,
    ...testTerms,
    ...digitalTerms,
    ...embeddedTerms,
    ...components,
    ...actions,
    ...metrics,
    ...toolTerms,
    ...phraseTerms
  ].map((item) => String(item).toLowerCase()))];

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function projectSpecificKeywords(project, categoryLabel = "") {
    const haystack = [
      project?.title,
      project?.summary,
      project?.category,
      categoryLabel,
      ...(project?.focus || []),
      ...(project?.tools || []).map((item) => typeof item === "string" ? item : [item.name, item.title, item.label, item.description].join(" ")),
      ...(project?.languages || [])
    ].map(normalize).join(" ");

    const buckets = new Set(categoryKeywords[project?.category] || []);
    toolTerms.forEach((term) => {
      if (haystack.includes(term.toLowerCase())) buckets.add(term);
    });
    allKeywords.forEach((term) => {
      const compactTerm = term.replace(/[^a-z0-9+#]+/g, " ").trim();
      if (compactTerm && haystack.includes(compactTerm)) buckets.add(term);
    });
    return [...buckets];
  }

  window.electronicsSearchKeywords = projectSpecificKeywords;
  window.electronicsSearchKeywordCount = allKeywords.length;
})();
