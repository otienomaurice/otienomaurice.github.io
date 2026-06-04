# VOLTAGE_CONTROLLED_OSCILLATOR 
This project presents the design, simulation, and hardware implementation of a Voltage Controlled Oscillator (VCO) operating at approximately 1 kHz when the control voltage is set to 1 V. The oscillator converts an input control voltage into a periodic output waveform whose frequency is determined by the charging and discharging behavior of a capacitor.

The system was designed using analog circuit blocks including:
Voltage regulation unit
Voltage-to-current conversion stage
Current mirror circuits
Capacitor charging and discharging network
Pulse width modulation (PWM) interface
The final stage of the project involved building the circuit on a printed circuit board (PCB) and performing experimental characterization to verify oscillator performance.
## Project Goals

The primary objectives of this project were:
Design a voltage controlled oscillator with a 1 kHz operating frequency.
Use a voltage-to-current converter to control capacitor charging.
Implement current mirrors to ensure stable charging and discharging currents.
Validate operation through circuit simulation.
Fabricate and test the oscillator on a hardware PCB.
## System Architecture

The VCO consists of several interconnected analog blocks
Control Voltage
      │
      ▼
Voltage-to-Current Converter
      │
      ▼
Current Mirror Network
      │
      ▼
Capacitor Charging / Discharging
      │
      ▼
Comparator / Switching Stage
      │
      ▼
Oscillating Output (PWM / Square Wave)
# Key Circuit Blocks
## 1. Voltage Regulation Unit
The first stage of the design is the voltage regulation unit. Its purpose is to provide a stable operating supply for the rest of the oscillator blocks. Since the VCO relies on analog biasing and controlled charging/discharging of a capacitor, stable voltage regulation is necessary to reduce unwanted variation in current levels and switching thresholds. This stage therefore establishes the electrical conditions under which the rest of the oscillator can operate predictably.
## 2. Control and Biasing Stage
The VCO is designed to operate for a target control voltage of 1 V and a target oscillation frequency of about 1 kHz. In this stage, the control input is used to set the operating point of the oscillator. This is tied to the voltage-to-current behavior that determines the charge and discharge rate of the timing capacitor.
## 3. Voltage-to-Current Converter
The oscillator frequency is controlled by converting the control voltage into a charging current. This current is set by a current limiting resistor and NMOS device sititng  across an op amp output in the voltage follower configuration. 
## 4. Current Mirror Stage
The current mirror block  is to push current to and pull current from the capacitor, allowing the capacitor to charge and discharge. This means the current mirrors are not just bias elements; they actively form the bidirectional current path that creates the oscillation ramp. The nested DC sweep of vctrl, vcap, and vfb was used to verify that this stage maintains the required current near 0.1 mA under the intended operating conditions.
The voltage-to-current converter establishes a current approximately equal to:
I=0.1 mA
This current determines the slope of the capacitor charging ramp.
The current mirror is used to replicate the reference current and control capacitor charging behavior.

Functions of this stage:
mirror the reference current
provide symmetric charge and discharge currents
maintain stable oscillator frequency
During design verification, a nested DC sweep simulation was performed across:
VCTRL
VCAP
VFB	​
The results confirmed that the mirrored current remained close to the target 0.1 mA.
The oscillator operates by repeatedly charging and discharging a capacitor.
### Charging Phase
1. The current mirror injects a constant current into the capacitor.
2. Capacitor voltage rises linearly.
### Threshold Detection
3. Comparator detects when the voltage reaches a threshold.
### Discharge Phase
4. Current direction reverses.
5. Capacitor discharges linearly.
This repeating process generates a triangular waveform across the capacitor and a square-wave oscillator output.
Frequency Relationship

The oscillation frequency depends on the capacitor value and charging current.

A simplified relation is:   𝑓 ≈ 𝐼/(2𝐶Δ𝑉) 
Where:
I = charging current
C = timing capacitor
ΔV = threshold voltage swing
The circuit parameters were selected to produce a frequency near 1 kHz when 
𝑉𝐶𝑇𝑅𝐿 = 1.
<img width="1243" height="694" alt="image" src="https://github.com/user-attachments/assets/d1ecdb71-debc-4bf1-b82c-9d413e00e52a" />

<img width="1316" height="665" alt="image" src="https://github.com/user-attachments/assets/2e98cc40-fd28-4266-ab3e-d03d20af1f24" />

<img width="828" height="855" alt="image" src="https://github.com/user-attachments/assets/e783ce84-6748-4084-81e2-a838e9fe7965" />

<img width="1167" height="803" alt="image" src="https://github.com/user-attachments/assets/06733a88-4aab-43c8-b491-e3a3783585bb" />

<img width="1347" height="845" alt="image" src="https://github.com/user-attachments/assets/efe4e5bf-96c2-40b4-a6af-c6e515beaf0a" />

<img width="1012" height="727" alt="image" src="https://github.com/user-attachments/assets/b83502d0-35ef-44d5-adba-e982341b272f" />

