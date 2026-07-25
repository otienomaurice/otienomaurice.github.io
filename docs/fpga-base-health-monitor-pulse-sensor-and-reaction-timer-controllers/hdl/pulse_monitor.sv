`timescale 1ns / 1ps

module pulse_monitor(
    input  logic clk, pulse_in, rst,
    output logic [3:0] d0p, d1p, d2p, d3p
);
    logic [7:0] out;

    binary_to_bcd BCD_CONVERTER(
        .d0(d0p), .d1(d1p), .d2(d2p), .out
    );

    pulse_registers PULSE_REGISTER(
        .clk, .pulse_in, .out, .rst
    );

    assign d3p = 4'b0;
endmodule
