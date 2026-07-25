`timescale 1ns / 1ps

module multiplier(
    input  logic [2:0] qinc,
    output logic [12:0] w
);
    assign w = qinc << 10;
endmodule
