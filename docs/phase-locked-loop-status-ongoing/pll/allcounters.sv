`timescale 1ns / 1ps

module allcounters(
    input  logic clk, rst, enable,
    output logic [3:0] d0, d1, d2, d3,
    output logic time_late
);
    logic carry1, carry2, carry3, carry4;
    logic clkcommon, rstcommon;
    logic [3:0] q0, q1, q2, q3;

    counter_bcd D0(.enb(enable), .rst(rstcommon), .clk(clkcommon), .carry(carry1), .q(q0));
    counter_bcd D1(.enb(carry1), .rst(rstcommon), .clk(clkcommon), .q(q1), .carry(carry2));
    counter_bcd D2(.enb(carry2), .rst(rstcommon), .clk(clkcommon), .q(q2), .carry(carry3));
    counter_bcd D3(.enb(carry3), .rst(rstcommon), .clk(clkcommon), .q(q3), .carry(carry4));

    assign time_late = (q3 == 4'd5);
    assign d0 = q0;
    assign d1 = q1;
    assign d2 = q2;
    assign d3 = q3;
    assign clkcommon = clk;
    assign rstcommon = rst;
endmodule
