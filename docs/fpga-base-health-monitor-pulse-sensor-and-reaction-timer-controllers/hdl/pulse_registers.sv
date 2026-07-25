`timescale 1ns / 1ps

module pulse_registers(
    input  logic clk, pulse_in, rst,
    output logic [7:0] out
);
    logic lden;
    logic clr;
    logic [4:0] q0, q1, q2, q3;
    logic [4:0] d0, d1, d2;

    assign clr = lden;

    pulse_counter PULSE_COUNTER(
        .clk, .enb(pulse_in), .clr, .q0, .rst
    );

    pulse5_reg_1 REG1(
        .clk, .lden, .q0, .q1, .rst
    );

    pulse5_reg_2 REG2(
        .clk, .lden, .q1, .q2, .rst
    );

    pulse5_reg_3 REG3(
        .clk, .lden, .q2, .q3, .rst
    );

    pulse_delay_counter PDELAY(
        .clk, .delay_done(lden), .rst
    );

    assign d0 = q1;
    assign d1 = q2;
    assign d2 = q3;

    // The pulses received are in beats per 5-second sample windows.
    // The original report shifts by 2 to scale the 3-sample average to BPM.
    assign out = (d0 + d1 + d2) << 2;
endmodule
