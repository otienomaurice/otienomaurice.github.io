`timescale 1ns / 1ps

module binary_to_bcd(
    input  logic [7:0] out,
    output logic [3:0] d2,
    output logic [3:0] d1,
    output logic [3:0] d0
);
    logic [7:0] b;
    logic [3:0] a1, a2, a3, a4, a5, a6, a7;
    logic [3:0] y1, y2, y3, y4, y5, y6, y7;

    assign b = out;

    add3 U_ADD3_1(.a(a1), .y(y1));
    add3 U_ADD3_2(.a(a2), .y(y2));
    add3 U_ADD3_3(.a(a3), .y(y3));
    add3 U_ADD3_4(.a(a4), .y(y4));
    add3 U_ADD3_5(.a(a5), .y(y5));
    add3 U_ADD3_6(.a(a6), .y(y6));
    add3 U_ADD3_7(.a(a7), .y(y7));

    assign a1 = {1'b0, b[7:5]};
    assign a2 = {y1[2:0], b[4]};
    assign a3 = {y2[2:0], b[3]};
    assign a4 = {y3[2:0], b[2]};
    assign a5 = {y4[2:0], b[1]};
    assign a6 = {1'b0, y1[3], y2[3], y3[3]};
    assign a7 = {y6[2:0], y4[3]};

    assign d2 = {1'b0, 1'b0, y6[3], y7[3]};
    assign d1 = {y7[2:0], y5[3]};
    assign d0 = {y5[2:0], b[0]};
endmodule
