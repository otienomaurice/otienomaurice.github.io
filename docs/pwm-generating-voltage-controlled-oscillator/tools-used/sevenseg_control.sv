`timescale 1ns / 1ps

module sevenseg_control(
    input  logic clk, rst,
    input  logic en,
    input  logic [3:0] d0, d1, d2, d3,
    output logic dot,
    output logic [7:0] y_n,
    output logic [6:0] segs_n
);
    logic [2:0] sel;
    logic [3:0] y;

    count_3bit COUNT_3(
        .clk, .rst, .q(sel), .en
    );

    dec_3_5 DEC(
        .a(sel), .y_n, .dot
    );

    mux5 MUX(
        .d0, .d1, .d2, .d3, .sel, .y
    );

    sevenseg_hex SEVENSEG(
        .data(y), .segs_n
    );
endmodule
